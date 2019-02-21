import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login = (uid) => ({
	type: 'LOGIN',
	uid
})
export const startGoogleLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	}
}

export const startLogin = (email, password) => {
	return () => {
		return firebase.auth().signInWithEmailAndPassword(email, password)
		.then(()=>{
			console.log(this)
		})
		.catch(error=>console.log(error))
	}
}

export const registerNewUser = (email, password) => {
	return () => {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((authUser)=>{
				console.log(authUser)
			})
	}	
}

export const logout = () => ({
	type: 'LOGOUT'
})
export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	}
}