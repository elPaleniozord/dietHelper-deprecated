import * as firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
// non redux method
// 
// class Firebase {
//   constructor() {
//     app.initializeApp(config);

//     this.auth = app.auth();
//     console.log(this)
//   }
//   //Auth API
//   doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
// }

// export default Firebase;

//redux implementation
firebase.initializeApp(config);

const database = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {firebase, googleAuthProvider, database as default}
