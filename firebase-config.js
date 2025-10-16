const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "banco-login-cc2ff.firebaseapp.com",
    databaseURL: "https://banco-login-cc2ff-default-rtdb.firebaseio.com/",
    projectId: "banco-login-cc2ff",
    storageBucket: "banco-login-cc2ff.firebasestorage.app",
    messagingSenderId: "344052622939",
    appId: "1:344052622939:web:485aa800b124eaeebd817e",
    
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();