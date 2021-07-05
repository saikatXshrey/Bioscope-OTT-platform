import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
	apiKey: "AIzaSyA87elZfF5z5HyDlOdN9_j_7cq5vZUG1yM",
	authDomain: "bioscope-e53fc.firebaseapp.com",
	projectId: "bioscope-e53fc",
	storageBucket: "bioscope-e53fc.appspot.com",
	messagingSenderId: "88048937002",
	appId: "1:88048937002:web:d088deef4581dda152fb53",
	measurementId: "G-YZHBKCVLJC",
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
