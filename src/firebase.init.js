// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMCXkpvaxBt8NpYsjHFAqrtssHPqku3rc",
  authDomain: "gym-trainer-8ec75.firebaseapp.com",
  projectId: "gym-trainer-8ec75",
  storageBucket: "gym-trainer-8ec75.appspot.com",
  messagingSenderId: "457480410955",
  appId: "1:457480410955:web:380865e20e2ddf7222bace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);