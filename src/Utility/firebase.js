// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyBJGBsdOQV_9ukOV5SOVozVjzdE2Wu-6FE",
// 	authDomain: "clone-062024.firebaseapp.com",
// 	projectId: "clone-062024",
// 	storageBucket: "clone-062024.appspot.com",
// 	messagingSenderId: "474887240318",
// 	appId: "1:474887240318:web:a121fcb0367c53822db62f",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBJGBsdOQV_9ukOV5SOVozVjzdE2Wu-6FE",
  authDomain: "clone-062024.firebaseapp.com",
  projectId: "clone-062024",
  storageBucket: "clone-062024.appspot.com",
  messagingSenderId: "474887240318",
  appId: "1:474887240318:web:a121fcb0367c53822db62f",
  // measurementId: "G-75J35LR44N"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = app.firestore();
