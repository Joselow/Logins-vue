import './assets/main.css';

import { initializeApp } from "firebase/app";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const firebaseConfig = {
    apiKey: "AIzaSyDogjnQ4xRU9wkud4bCvsA-MnkQO_sF5Rk",
    authDomain: "practice-vue-c2eb6.firebaseapp.com",
    projectId: "practice-vue-c2eb6",
    storageBucket: "practice-vue-c2eb6.appspot.com",
    messagingSenderId: "386698703851",
    appId: "1:386698703851:web:d60c01d267cdf262425fae",
    measurementId: "G-4XCSLW8X8E"
  };
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)
app.mount('#app')
