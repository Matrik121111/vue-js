import firebase from "firebase";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBi_YdNDx7LlDhiNplO80T4djbB9OQLkug",
    authDomain: "boostr-49db2.firebaseapp.com",
    projectId: "boostr-49db2",
    storageBucket: "boostr-49db2.appspot.com",
    messagingSenderId: "693864698294",
    appId: "1:693864698294:web:4780b250abcf26ea2ff117"
};

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fb,db}