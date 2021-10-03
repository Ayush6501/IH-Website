import firebase from 'firebase';
import REACT_APP_FIREBASE_API from '../../.env'
import REACT_APP_FIREBASE_APP_ID from '../../.env'

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API,
    authDomain: "ihwebsite.firebaseapp.com",
    projectId: "ihwebsite",
    storageBucket: "ihwebsite.appspot.com",
    messagingSenderId: "363930520867",
    appId: REACT_APP_FIREBASE_APP_ID,
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
