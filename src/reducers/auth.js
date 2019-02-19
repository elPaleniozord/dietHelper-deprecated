export default (state = {}, action) => {
	console.log('auth called', action)
	switch (action.type){
		case 'LOGIN':
			return {
				uid: action.uid
			}
		case 'LOGOUT':
			return {}
		default:
			return state
	}
}