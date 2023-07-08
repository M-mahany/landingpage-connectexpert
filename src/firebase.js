// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxiYWqJ0DLAUfxszSNHAQqtGtSS2TJh6c',
  authDomain: 'survey-1738e.firebaseapp.com',
  projectId: 'survey-1738e',
  storageBucket: 'survey-1738e.appspot.com',
  messagingSenderId: '583397831234',
  appId: '1:583397831234:web:d1145678589242cfd873db',
  measurementId: 'G-S6T4SM8RKD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
