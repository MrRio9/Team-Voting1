import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAe8kQwh045jY_sp-ALIE8zQT6EoYXBPOA",
    authDomain: "project66-36c06.firebaseapp.com",
    projectId: "project66-36c06",
    storageBucket: "project66-36c06.appspot.com",
    messagingSenderId: "1059683111551",
    appId: "1:1059683111551:web:3aed9f5bd60a73a94d254a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();