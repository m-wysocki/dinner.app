import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDC-daRDVzz8IzQQpluw6w8x4x9DW2eo3c',
  authDomain: 'recipesapp-35f7d.firebaseapp.com',
  databaseURL: 'https://recipesapp-35f7d.firebaseio.com',
  projectId: 'recipesapp-35f7d',
  storageBucket: 'recipesapp-35f7d.appspot.com',
  messagingSenderId: '1012847889989',
  appId: '1:1012847889989:web:2797b5c8ee7469f2569d2c',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
