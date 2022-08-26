// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore, collection, onSnapshot, setDoc,doc} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"
const btn = document.getElementById("btnEnviar")
const name = document.getElementById("name")


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfYWY8s9FU9G-uvPASgxibQGFd4Hb8wRM",
  authDomain: "inventario-a962f.firebaseapp.com",
  projectId: "inventario-a962f",
  storageBucket: "inventario-a962f.appspot.com",
  messagingSenderId: "91951391567",
  appId: "1:91951391567:web:ef68c4ed76067c3185db3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


  const db = getFirestore(app);
  

  export const getProducts = (callback) => onSnapshot(collection(db,"products"), callback);

  
export const sendProduct = async (product) => await setDoc(doc(db,'products',`${name.value}`),product);

  // export const prueba = () => console.log('Prueba');


// sirve
  // await setDoc(doc(db, "products","nuevoDato"), {
  //   name: "prueba2",
  //   state: "CA",
  //   country: "USA"
  // });
  