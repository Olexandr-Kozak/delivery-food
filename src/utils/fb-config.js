import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD9eJWFnwyWoWEPnb0KnK7CGHpmJOIpuRo",
  authDomain: "delivery-food-952c6.firebaseapp.com",
  databaseURL: "https://delivery-food-952c6-default-rtdb.firebaseio.com",
  projectId: "delivery-food-952c6",
  storageBucket: "delivery-food-952c6.appspot.com",
  messagingSenderId: "960204463934",
  appId: "1:960204463934:web:396f05cb08f08a75fdd66f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;