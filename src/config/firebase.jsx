// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDo1-hs9EJjTf8-HvN7b6CS17IZc34fD0",
  authDomain: "react-auth-34340.firebaseapp.com",
  projectId: "react-auth-34340",
  storageBucket: "react-auth-34340.firebasestorage.app",
  messagingSenderId: "714386988124",
  appId: "1:714386988124:web:44708cbffd32f5fc951a99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 匯出
export const auth=getAuth(app);
export const provide=new GoogleAuthProvider();