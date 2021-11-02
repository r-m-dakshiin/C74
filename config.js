import * as firebase from "firebase"
require("@firebase/firestore")



var firebaseConfig = {
  apiKey: "AIzaSyD_6TQpTGRjRyEgQlbfBews55eJm4CSmUQ",
  authDomain: "willy-app-8c0dc.firebaseapp.com",
  projectId: "willy-app-8c0dc",
  storageBucket: "willy-app-8c0dc.appspot.com",
  messagingSenderId: "166525011304",
  appId: "1:166525011304:web:7562ebb679c9ed36f8c2dd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
