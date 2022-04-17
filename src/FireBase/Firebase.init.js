import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQk8wHqXiWJlgX_osPRHE_uoMPVu8y5l0",
  authDomain: "power-zone-cfa81.firebaseapp.com",
  projectId: "power-zone-cfa81",
  storageBucket: "power-zone-cfa81.appspot.com",
  messagingSenderId: "364165570109",
  appId: "1:364165570109:web:b3d82c45fafdf03230d454",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
