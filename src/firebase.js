import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyB5d_8md7OWQQIgFvP4NWPDrOEQI2pV20k",
    authDomain: "rick-y-morty-react.firebaseapp.com",
    databaseURL: "https://rick-y-morty-react.firebaseio.com",
    projectId: "rick-y-morty-react",
    storageBucket: "rick-y-morty-react.appspot.com",
    messagingSenderId: "424567064139",
    appId: "1:424567064139:web:615d804c94f355ae02afce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


let db = firebase.firestore().collection('favs')

export function getFavs(uid){
    return db.doc(uid).get()
    .then(snap=>{
      return snap.data().array
    })
}

export function updateDB (array, uid){
  return db.doc(uid).set({array})
}

  export function singOutGoogle () {
    firebase.auth().signOut()
  }

  export function loginWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
         .then(snap => snap.user)
  }