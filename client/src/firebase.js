import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyClnSZjOiEs3NWVWYtyH74Atz-YizbhEuw",
  authDomain: "desucalls.firebaseapp.com",
  projectId: "desucalls",
  storageBucket: "desucalls.appspot.com",
  messagingSenderId: "142108992249",
  appId: "1:142108992249:web:b63721b69cee08cb8c7828",
  measurementId: "G-2DY1YFEYMP"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire