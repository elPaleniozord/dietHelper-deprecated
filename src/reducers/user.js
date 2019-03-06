export default (state = null, action) => {
  switch (action.type) {
    case 'SET_USERDATA':
      return action.user;
    case 'UPDATE_USERDATA':
      return action.user;
    default:
      return state;
  }
}