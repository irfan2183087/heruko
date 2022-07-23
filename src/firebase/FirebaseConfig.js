import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQSWCH-HPyTg-HCEBQ-oa7ohXZ06VREoY",
  authDomain: "assetmanagement-aeac4.firebaseapp.com",
  projectId: "assetmanagement-aeac4",
  storageBucket: "assetmanagement-aeac4.appspot.com",
  messagingSenderId: "963748082864",
  appId: "1:963748082864:web:6f4e9511535ffbc3893775",
  measurementId: "G-VRZ5EFNNMN",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
