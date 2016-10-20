import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBQK9aRaZMJo-5wDlzbmEMfT97Awebwm1g",
  authDomain: "shootthebreeze-8ee5f.firebaseapp.com",
  databaseURL: "https://shootthebreeze-8ee5f.firebaseio.com",
  storageBucket: "shootthebreeze-8ee5f.appspot.com",
  messagingSenderId: "184457650523"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const messsagesFromDatabase = firebase.database().ref('messages');
