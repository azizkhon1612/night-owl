import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// });

const firebaseConfig = {
  apiKey: "AIzaSyBNIsH2EAOwcSez9LRBotkEYMGduF14kHs",
  authDomain: "night-owl-43e99.firebaseapp.com",
  projectId: "night-owl-43e99",
  storageBucket: "night-owl-43e99.appspot.com",
  messagingSenderId: "844019019706",
  appId: "1:844019019706:web:441701f3240548c8deb783",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
