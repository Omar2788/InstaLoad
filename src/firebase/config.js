 import firebase from 'firebase';
 import"firebase/auth"; 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAGOalrvkEHfuo2omw1ZqV3Zg3oUDRWfLk",
  authDomain: "firegram-1d78f.firebaseapp.com",
  projectId: "firegram-1d78f",
  storageBucket: "firegram-1d78f.appspot.com",
  messagingSenderId: "634338295932",
  appId: "1:634338295932:web:88e05caa7fff68a58109f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage(); 
  const projectFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  const auth = firebase.auth();
  
export {auth, projectStorage , projectFirestore, firebaseConfig, timestamp } ;