import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyCXJG1cA8272bFdFn4lLvRveEYa_fvelIU",
  authDomain: "nuxt-practicce.firebaseapp.com",
  projectId: "nuxt-practicce",
  storageBucket: "nuxt-practicce.appspot.com",
  messagingSenderId: "343611156725",
  appId: "1:343611156725:web:34cff4fba5e9ae13117dbc",
  measurementId: "G-8G41CRZ1BH",
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const functions = firebase.functions();
export const authObject = firebase.auth;
export const firestore = firebase.firestore;
