import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
export const auth = getAuth(app);
