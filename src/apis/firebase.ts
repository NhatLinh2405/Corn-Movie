// import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCS1xSAxX88BpVNSbFV7lv1LDgHTfsZpR0",
	authDomain: "corn-movie.firebaseapp.com",
	projectId: "corn-movie",
	storageBucket: "corn-movie.appspot.com",
	messagingSenderId: "542374105305",
	appId: "1:542374105305:web:c6077334a41e45440aaec8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
