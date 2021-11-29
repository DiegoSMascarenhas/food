// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDNHy5n5zRW1F49z9xy-rwF8t1wSJ3o6I",
  authDomain: "food-a0e73.firebaseapp.com",
  projectId: "food-a0e73",
  storageBucket: "food-a0e73.appspot.com",
  messagingSenderId: "848292222446",
  appId: "1:848292222446:web:03d1bd3fcbab9204b3eaff",
  measurementId: "G-33B406GLX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);