// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAH0ZDb58yDZtjD-oMemUnDCVU6h45roXU',
  authDomain: 'graphiql-app-bb5fc.firebaseapp.com',
  projectId: 'graphiql-app-bb5fc',
  storageBucket: 'graphiql-app-bb5fc.appspot.com',
  messagingSenderId: '889614109304',
  appId: '1:889614109304:web:2f3bb77c309bb2092ebb8d',
  measurementId: 'G-N8VV6B2ZLP',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
