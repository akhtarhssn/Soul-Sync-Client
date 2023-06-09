// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChQe026ZelTI_-fYBjbIea6zQwSmAlaIs",
  authDomain: "soul-sync-client.firebaseapp.com",
  projectId: "soul-sync-client",
  storageBucket: "soul-sync-client.appspot.com",
  messagingSenderId: "39339034505",
  appId: "1:39339034505:web:20de17e225eafa14988358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
