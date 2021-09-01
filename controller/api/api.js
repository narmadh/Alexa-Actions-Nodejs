
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA2YsnCNc9cAFOsIL7qNweRF7gMzRugCWo",
    authDomain: "learningmattersprotosem.firebaseapp.com",
    databaseURL: "https://learningmattersprotosem-default-rtdb.firebaseio.com",
    projectId: "learningmattersprotosem",
    storageBucket: "learningmattersprotosem.appspot.com",
    messagingSenderId: "585768616134",
    appId: "1:585768616134:web:4b345a33b968ad225dd7c7",
    measurementId: "G-QJJK0YW77P"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database()

const api = (req, res) => {
    return "JSON hehe" + res.data
}

export default api

