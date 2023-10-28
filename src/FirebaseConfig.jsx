import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBteRm3wHWifD2FzPZCVB7P7l1s00RUFjc",
  authDomain: "omg-ffbf5.firebaseapp.com",
  projectId: "omg-ffbf5",
  storageBucket: "omg-ffbf5.appspot.com",
  messagingSenderId: "1081488029520",
  appId: "1:1081488029520:web:6d0180c9c38f073da2de55",
  measurementId: "G-QWJE8TG9Y1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}