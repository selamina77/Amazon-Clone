// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCnDiOlgkMyAE0nr_m3Noa9BOqfQMzbyS4",
    authDomain: "selamproject.firebaseapp.com",
    projectId: "selamproject",
    storageBucket: "selamproject.appspot.com",
    messagingSenderId: "845641240363",
    appId: "1:845641240363:web:b68e2b3026d1946aabbf6e",
    measurementId: "G-PCCZG5B1B1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };