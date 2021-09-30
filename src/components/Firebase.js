import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCM35i-UZpMGhfmw52U9_GY2kngpw5sIU4",
    authDomain: "ihwebsite.firebaseapp.com",
    projectId: "ihwebsite",
    storageBucket: "ihwebsite.appspot.com",
    messagingSenderId: "363930520867",
    appId: "1:363930520867:web:7829d16e0e0e9b99eb9096",
    measurementId: "G-13X5FPBZ0R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;

firebase.analytics();
