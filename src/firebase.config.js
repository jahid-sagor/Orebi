import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBI_VyxlMsem3xskuHMnTLonX886VnWV3s",
  authDomain: "orebi1999.firebaseapp.com",
  projectId: "orebi1999",
  storageBucket: "orebi1999.appspot.com",
  messagingSenderId: "597211091901",
  appId: "1:597211091901:web:13edbf45512b303cebb8d4",
  measurementId: "G-FWNXGG12S3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default firebaseConfig;