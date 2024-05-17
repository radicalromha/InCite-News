// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq2ojFSrWiBW65b8hzSO7VkXNKBUDlF0Y",
  authDomain: "incite-234a5.firebaseapp.com",
  projectId: "incite-234a5",
  storageBucket: "incite-234a5.appspot.com",
  messagingSenderId: "651247018304",
  appId: "1:651247018304:web:b93e823a9a329d2ff3daa5",
  measurementId: "G-Y155TZ0KDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
