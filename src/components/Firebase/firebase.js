import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyD-BVJRPiw1JW5WHtgSx8OJbFc-a-8WZr4",
  authDomain: "mercado-privado.firebaseapp.com",
  databaseURL: "https://mercado-privado-default-rtdb.firebaseio.com",
  projectId: "mercado-privado",
  storageBucket: "mercado-privado.appspot.com",
  messagingSenderId: "780159254852",
  appId: "1:780159254852:web:7bc96cb5fe212632835711",
  measurementId: "G-YFLSV1G12T"
};

let fire = firebase.initializeApp(firebaseConfig);

export default fire;