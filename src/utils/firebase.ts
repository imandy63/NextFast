import { firebaseConfig, firebaseConfig_sub } from "@/config/firebase.config";
import { initializeApp } from "firebase/app";
// Initialize Firebase
// console.log(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig_sub);
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
