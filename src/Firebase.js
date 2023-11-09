import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyBzz6q2qFY5CPhJUvFfWZ2xbUJ0a8eeppI",
	authDomain: "pp-741c0.firebaseapp.com",
	projectId: "pp-741c0",
	storageBucket: "pp-741c0.appspot.com",
	messagingSenderId: "530462193154",
	appId: "1:530462193154:web:30def533328b759a5fd91b",
	measurementId: "G-D2H8T41MPX",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
