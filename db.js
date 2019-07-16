import Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCU7pLC_1XYOVoPGzLj4EVS7lGlVQoNf9c",
    authDomain: "resolvetest-16fb3.firebaseapp.com",
    databaseURL: "https://resolvetest-16fb3.firebaseio.com",
    projectId: "resolvetest-16fb3",
    storageBucket: "",
    messagingSenderId: "311353194429",
    appId: "1:311353194429:web:88986ca74b517bbb"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();