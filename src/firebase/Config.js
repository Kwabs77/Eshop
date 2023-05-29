// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import {getAuth} from 'firebase/auth';
//import {getFireStore} from 'firebase/firestore';
//import {getStore} from 'firebase/storage'


import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';


// Your web app's Firebase configuration
 export  const firebaseConfig = {
  apiKey: "AIzaSyAAngWTyfJSPg50ENsMxy1GNJax3Bgvqek",
  authDomain: "eshop-13f2c.firebaseapp.com",
  projectId: "eshop-13f2c",
  storageBucket: "eshop-13f2c.appspot.com",
  messagingSenderId: "266291554847",
  appId: "1:266291554847:web:23afddb85b8f6c6985832a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);
 export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


//export const db = getFireStore(app);
//export const storage = getStore(app);
export default app;