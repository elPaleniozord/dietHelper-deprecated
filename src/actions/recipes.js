import database from '../firebase/firebase'

export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  recipe
})

export const startAddNewRecipe = (recipe) => {
  return (dispatch)=>{
    const item = {
      name: recipe.id,
      menu: recipe.menu,
      macros: {
        kcal: recipe.kcal,
        prot: recipe.prot,
        carb: recipe.carb,
        fats: recipe.fats,
      },
      ingredients: recipe.ingredients
    }
    return database.collection("recipes").doc(recipe.id).set(item).then(      
      dispatch(startLoadRecipes())
    )
  }  
}

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