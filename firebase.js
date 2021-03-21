import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
     
    apiKey: "AIzaSyCnHFkovolq-CLYns_16yijzhIFMEDhFWM",
    authDomain: "react-contact-form-14963.firebaseapp.com",
    projectId: "react-contact-form-14963",
    storageBucket: "react-contact-form-14963.appspot.com",
    messagingSenderId: "968437792154",
    appId: "1:968437792154:web:650d23f0bebb6499f68e23",
  })

  var db = firebaseApp.firestore()
  export {db}
  

