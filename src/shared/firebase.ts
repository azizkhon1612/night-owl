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
  databaseURL: "https://night-owl-43e99-default-rtdb.firebaseio.com",
  projectId: "night-owl-43e99",
  storageBucket: "night-owl-43e99.appspot.com",
  messagingSenderId: "844019019706",
  appId: "1:844019019706:web:441701f3240548c8deb783",
  measurementId: "G-4SN14FN07F"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyC5V0Pm-YJV9h0kyX9aBgrKrs3_J3R2Foo",
//   authDomain: "pvt-comments.firebaseapp.com",
//   databaseURL: "https://pvt-comments-default-rtdb.firebaseio.com",
//   projectId: "pvt-comments",
//   storageBucket: "pvt-comments.appspot.com",
//   messagingSenderId: "700353567702",
//   appId: "1:700353567702:web:f36bbbae9c78ac1e3ea277",
// };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
