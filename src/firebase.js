import firebase from "firebase/app";
import "firebase/auth";

//  const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_APP_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATA_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })


 const app = firebase.initializeApp({
    apiKey: "AIzaSyDEm43oqfsIZkgX_RFfO9kEJp47yD2rAU0",
    authDomain: "auth-dev-55c3e.firebaseapp.com",
    databaseURL: "https://auth-dev-55c3e.firebaseio.com",
    projectId: "auth-dev-55c3e",
    storageBucket: "auth-dev-55c3e.appspot.com",
    messagingSenderId: "799794296804",
    appId: "1:799794296804:web:5bd73103be70648411b9f1"
})

export const auth = app.auth();
export default app;