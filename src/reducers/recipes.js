const recipesReducerDefaultState = {
  newRecipe:{
    id: 'xxx',
    menu: 'breakfast'
  }}

export default (state = recipesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_NEW_RECIPE':
      return state
    case 'ADD_NEW_VARIANT':
      console.log(state, action)
      return state
    case 'LOAD_RECIPES':
      return {...state, ...action.recipes};
    default:
      return state;
  }
}