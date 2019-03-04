import database from '../firebase/firebase'

export const updateUser = (user) => ({
	type: 'UPDATE_USERDATA',
	user
})

export const startUpdateUser = (user) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.collection("users").doc(uid)
			.get().then(doc=>{
				if(doc.exists) {
					database.collection("users").doc(uid).update(user)
				} else {
					database.collection("users").doc(uid).set({
						username: user.username,
						kcal: user.kcal,
						goal: user.goal,
						meals: user.meals
					})
				}
				dispatch(updateUser(user))
			})
	}
}

export const startSetUser = (uid) => {
	const docRef = database.collection("users").doc(uid)
		
}