// Substitua os valores abaixo pelo seu projeto Firebase
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "novo-projeto-cetec.firebaseapp.com",
    projectId: "novo-projeto-cetec",
    storageBucket: "novo-projeto-cetec.firebasestorage.app",
    messagingSenderId: "1025785217301",
    appId: "1:1025785217301:web:bf60ddbb1e93a46e5ae91c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();