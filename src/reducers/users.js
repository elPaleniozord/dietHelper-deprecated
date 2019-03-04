export default (state = null, action) => {
  console.log(action)
  switch (action.type) {
    case 'UPDATE_USERDATA':
      return action.user;
    default:
      return state;
  }
}