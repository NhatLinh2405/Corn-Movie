import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCS1xSAxX88BpVNSbFV7lv1LDgHTfsZpR0",
	authDomain: "corn-movie.firebaseapp.com",
	projectId: "corn-movie",
	storageBucket: "corn-movie.appspot.com",
	messagingSenderId: "542374105305",
	appId: "1:542374105305:web:c6077334a41e45440aaec8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
