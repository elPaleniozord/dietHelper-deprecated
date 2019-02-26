import database from '../firebase/firebase'

export const addNewRecipe = (recipe) => {
  return ()=>{
    return database.collection("recipes").doc(recipe.id).set({
      name: recipe.id,
      menu: recipe.menu,
      macros: {
        kcal: recipe.kcal,
        prot: recipe.prot,
        carb: recipe.carb,
        fats: recipe.fats,
      },
      ingredients: recipe.ingredients
    }).then(
      console.log('recipe added')
    )
  }  
}