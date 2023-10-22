import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBogy7K-_QlmiHMQgg8yET_t4qIQI4CER4",
  authDomain: "ecommerce-pisos.firebaseapp.com",
  projectId: "ecommerce-pisos",
  storageBucket: "ecommerce-pisos.appspot.com",
  messagingSenderId: "973322658072",
  appId: "1:973322658072:web:3b429b057eeeeff23c7e6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);