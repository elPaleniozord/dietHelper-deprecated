import database from '../firebase/firebase'

export const setUserData = (uid) => {
	const docRef = database.collection("users").doc(uid)

	docRef.get().then((doc)=>{
		doc.exists ? console.log(doc.data())
		:
		database.collection("users").doc(uid).set({
			userName: 'Palen',
			kCal: 2000,
			plan: 'maintenance'
		})
	})
}