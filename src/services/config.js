import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn0I_ay8R5CYH7WExIi__NPOuNsM1vMnY",
  authDomain: "sneakydrops-b8318.firebaseapp.com",
  projectId: "sneakydrops-b8318",
  storageBucket: "sneakydrops-b8318.appspot.com",
  messagingSenderId: "553400419086",
  appId: "1:553400419086:web:71642ee5c7c3fac0c48d5f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);