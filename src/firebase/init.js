import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyACJ50JdsVdrvIIiy1GXBSHWC_7wECsiDY",
    authDomain: "spiderxm-chatbox.firebaseapp.com",
    databaseURL: "https://spiderxm-chatbox.firebaseio.com",
    projectId: "spiderxm-chatbox",
    storageBucket: "spiderxm-chatbox.appspot.com",
    messagingSenderId: "1078105302405",
    appId: "1:1078105302405:web:95f16fafdf9151c1ead0ec",
    measurementId: "G-XVTJJ33Q23"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()