import database from '../firebase/firebase'



export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
})

export const startAddNewRecipe = (recipe) => {
  const apiKey = process.env.REACT_APP_NDB_API_KEY;

  console.log(recipe)
  //compute base value
  //get macro values for each ingredient from ndb
  const kcal = 0, 
        prot = 0, 
        carb = 0, 
        fats = 0;

  recipe.ingredients.map((item)=>{
    console.log(item)
    //get macros
    macroLookup(item.code)
    
    
  })

  const base = {
    name: recipe.id,
    menu: recipe.menu,

  }

  const variants = []
  
  Object.keys(recipe.variants).map((variant)=>{

  })
  //call ndb for specific item
  const macroLookup = (id) => {
    const uri = 'https://api.nal.usda.gov/ndb/V2/reports?ndbno=' +id+ '&type=f&format=json&api_key=' +apiKey

    fetch(uri).then(response =>{
      if(response.ok){
        console.log(response.json)
        return response.json()
      } else {
        throw new Error ('Something went wrong ...')
      }
    }).then(data => {
      console.log(data)
    })
  }
  // return (dispatch)=>{
  //   const id = Object.entries(recipe.variant).length === 0 || recipe.variant.name === "" ? recipe.id : recipe.id+' ('+recipe.variant.name+')'
  //   const item = {
  //     name: id,
  //     menu: recipe.menu,
  //     macros: {
  //       kcal: recipe.kcal,
  //       prot: recipe.prot,
  //       carb: recipe.carb,
  //       fats: recipe.fats,
  //     },
  //     ingredients: recipe.ingredients,
  //     variants: {},

  //   }
  //   return database.collection("recipes").doc(id).set(item).then(      
  //     dispatch(startLoadRecipes()),
  //     recipe.variant.name && dispatch(startAddVariant(recipe.id, recipe.variant))
  //   )
  // }  
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