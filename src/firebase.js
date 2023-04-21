import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAZ4sApBHN6k5gxwULxT-7pGPDhrlXjmrc",
    authDomain: "linkedin-clone-d79f3.firebaseapp.com",
    projectId: "linkedin-clone-d79f3",
    storageBucket: "linkedin-clone-d79f3.appspot.com",
    messagingSenderId: "344844226567",
    appId: "1:344844226567:web:197e1510f1ffc4bbef5aa2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth , provider , storage};
  export default db;