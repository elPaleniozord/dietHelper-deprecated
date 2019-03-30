import database from '../firebase/firebase'

export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
})

export const startAddNewRecipe = (recipe) => {
  console.log(recipe)
  const apiKey = process.env.REACT_APP_NDB_API_KEY;
  let kcal = 0, 
      prot = 0, 
      carb = 0, 
      fats = 0,
      weight = 0;
  
  //call ndb for macros
  const macroLookup = (ids, amounts) => {
    const uri = 'https://api.nal.usda.gov/ndb/V2/reports?' +ids+ 'type=f&format=json&api_key=' +apiKey

    fetch(uri).then(response =>{
      if(response.ok){
        return response.json()
      } else {
        throw new Error ('Something went wrong ...')
      }
    }).then(data => {
      //sum macros of each ingredient
      data.foods.map((item, i) => {
        kcal += item.food.nutrients[1].value * (amounts[i]/100)
        prot += item.food.nutrients[3].value * (amounts[i]/100)
        fats += item.food.nutrients[4].value * (amounts[i]/100)
        carb += item.food.nutrients[6].value * (amounts[i]/100)
        weight += amounts[i]
      })
      //calculate macros per 100g
      kcal = kcal*100/weight
      prot = prot*100/weight
      fats = fats*100/weight
      carb = carb*100/weight
    })
  }
  
  let items = ''
  let amounts = []
  recipe.ingredients.map((ingredient, i)=>{
    const item = Object.values(ingredient)[i]
    amounts.push(item.amount)
    items += item.code.toString().length===4? 'ndbno=0'+item.code+'&' : 'ndbno='+item.code+'&'
  })
  macroLookup(items, amounts)

  return (dispatch)=>{
    const id = Object.entries(recipe.variant).length === 0 || recipe.variant.name === "" ? recipe.id : recipe.id+' ('+recipe.variant.name+')'
    const item = {
      [recipe.menu]: {
        name: 
      }
      name: recipe.id,
      menu: recipe.menu,
      macros: {
        kcal: recipe.kcal,
        prot: recipe.prot,
        carb: recipe.carb,
        fats: recipe.fats,
      },
      ingredients: recipe.ingredients,
      variants: {},

    }
    return database.collection("recipes").doc(id).set(item).then(      
      dispatch(startLoadRecipes()),
      recipe.variant.name && dispatch(startAddVariant(recipe.id, recipe.variant))
    )
  }  
}

export const addNewVariant = (variant) => ({
  type: 'ADD_NEW_VARIANT',
  variant
})

export const loadRecipes = (recipes) => ({
  type: 'LOAD_RECIPES',
  recipes
})

export const startLoadRecipes = () => {
  return (dispatch) => {
    const recipes = {}
    database.collection("recipes")
    .get()
    .then(snapshot => {
      snapshot.docs.map(doc=>{
        const temp = doc.data()
        const item = {}
        item[temp.name] = {
          macros: temp.macros,
          ingredients: temp.ingredients
        }
        recipes[temp.menu] = {...item, ...recipes[temp.menu]}
      })
      dispatch(loadRecipes(recipes))
    })    
  }
}

export const startAddVariant = (id, item) => {
  return () => {
    const variant = {[item.name]: item.macros}

    return database.collection("variants").doc(id)
      .get().then(doc=>{
        if(doc.exists){
          database.collection("variants").doc(id).update(variant)
        } else {
          database.collection("variants").doc(id).set(variant)
        }
      })
  }
}