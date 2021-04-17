import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAHZJbUGKaffCH7J1DOjjE-dEOIZzMoPZA",
    authDomain: "newsletter-785a8.firebaseapp.com",
    databaseURL: "https://newsletter-785a8-default-rtdb.firebaseio.com",
    projectId: "newsletter-785a8",
    storageBucket: "newsletter-785a8.appspot.com",
    messagingSenderId: "867581578711",
    appId: "1:867581578711:web:2dab3acf5f9e691642cf92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()