import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBaDJrEe8afTYd66epoSG-vJw0pj8AvUm0',
  authDomain: 'rian-the-messenger.firebaseapp.com',
  databaseURL: 'https://rian-the-messenger.firebaseio.com',
  projectId: 'rian-the-messenger',
  storageBucket: 'rian-the-messenger.appspot.com',
  messagingSenderId: '1017225775075',
  appId: '1:1017225775075:web:9c2c10f815fc4ece25c2d6'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
