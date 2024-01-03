import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const configFirebase = {
  apiKey: 'AIzaSyAH0ZDb58yDZtjD-oMemUnDCVU6h45roXU',
  authDomain: 'graphiql-app-bb5fc.firebaseapp.com',
  projectId: 'graphiql-app-bb5fc',
  storageBucket: 'graphiql-app-bb5fc.appspot.com',
  messagingSenderId: '889614109304',
  appId: '1:889614109304:web:2f3bb77c309bb2092ebb8d',
  measurementId: 'G-N8VV6B2ZLP',
};

export const firebaseApp = initializeApp(configFirebase);

export const auth = getAuth(firebaseApp);
