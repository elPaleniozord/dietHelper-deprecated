import database from '../firebase/firebase'

export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
})

export const startAddNewRecipe = (recipe) => {
  const apiKey = process.env.REACT_APP_NDB_API_KEY;
  
  //call ndb for macros
  const macroLookup = (ids, amounts) => {
    console.log('checking macros: ', ids)
    let kcal = 0, 
      prot = 0, 
      carb = 0, 
      fats = 0,
      weight = 0;
    const uri = 'https://api.nal.usda.gov/ndb/V2/reports?' +ids+ 'type=f&format=json&api_key=' +apiKey

    return fetch(uri).then(response =>{
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
      const macros = {
        kcal: kcal*100/weight,
        prot: prot*100/weight,
        fats: fats*100/weight,
        carb: carb*100/weight
      }
      return macros
    })
  }

  const processItems = (ingredients) =>{
    console.log('processing items: ', ingredients)
    let items = ''
    let amounts = []

    ingredients.map((ingredient, i)=>{
      const item = Object.values(ingredient)[i]
      amounts.push(item.amount)
      items += item.code.toString().length===4? 'ndbno=0'+item.code+'&' : 'ndbno='+item.code+'&'
    })     
    return macroLookup(items, amounts)
  }
  return async (dispatch)=>{
    let newRecipe = {
      [recipe.id]: {
        macros: await processItems(recipe.ingredients),
        ingredients: recipe.ingredients,
        variants: Object.values(recipe.variants).map(async(variant)=>{
          variant.macros = await processItems([variant])
          return variant
        }),
        recipe: recipe.recipe
      }
    }
    return database.collection("recipes").doc(recipe.menu).set(newRecipe)
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