import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDLrEQy6OYb4xV2gQDyHUt9MOx0kyY1ZJE",
    authDomain: "xenon-depth-274006.firebaseapp.com",
    projectId: "xenon-depth-274006",
    storageBucket: "xenon-depth-274006.appspot.com",
    messagingSenderId: "508412744353",
    appId: "1:508412744353:web:bd4fe3f6358438a1f296e0",
    measurementId: "G-QFT8HXBTZT"
};

export default firebase.initializeApp(firebaseConfig)