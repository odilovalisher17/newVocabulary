import {createStore, combineReducers, compose} from 'redux'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {devToolsEnhancer} from 'redux-devtools-extension'
import {createFirestoreInstance, firestoreReducer} from 'redux-firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYnpYXMg7q3rsTdFpF0VaeWKTCDA3YaQw",
  authDomain: "vocab-e7c56.firebaseapp.com",
  projectId: "vocab-e7c56",
  storageBucket: "vocab-e7c56.appspot.com",
  messagingSenderId: "397124374355",
  appId: "1:397124374355:web:0c5d27a73b98f86ecf1ba6",
  measurementId: "G-QVQ7RTYHKX"
};


// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}


  firebase.initializeApp(firebaseConfig)


  firebase.firestore() // <- needed if using firestore


  // Add firebase to reducers
    const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })


  const initialState = {}
  const store = createStore(rootReducer, initialState, compose(devToolsEnhancer()))



  export default store;


  export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }