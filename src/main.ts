import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./store";
import firebase from "firebase/app";
import "firebase/auth";

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
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

createApp(App)
  .use(store, key)
  .use(router)
  .mount("#app");
