// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyD-s_bDPDy9yBhFKBI1neZMNly5rjXO_MI",
    authDomain: "toolza-dlya-palochek.firebaseapp.com",
    projectId: "toolza-dlya-palochek",
    storageBucket: "toolza-dlya-palochek.appspot.com",
    messagingSenderId: "977874808248",
    appId: "1:977874808248:web:8af375f7a2b7b29b9cf34d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
