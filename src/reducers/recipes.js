const recipesReducerDefaultState = []

export default (state = recipesReducerDefaultState, action) => {
  switch(action.type){
    case 'LOAD_RECIPES':
      return action.recipes;
    default:
      return state;
  }
}