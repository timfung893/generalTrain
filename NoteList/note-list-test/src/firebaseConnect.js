import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT8ChIzf-S6CxBOHwv1Q8NONI-e0vp1GU",
  authDomain: "note-list-71b12.firebaseapp.com",
  databaseURL: "https://note-list-71b12-default-rtdb.firebaseio.com",
  projectId: "note-list-71b12",
  storageBucket: "note-list-71b12.appspot.com",
  messagingSenderId: "344315375219",
  appId: "1:344315375219:web:7f9a6fd66525cb2dbfc406",
  measurementId: "G-2XG8NCJEGN",
};

// Initialize Firebase
export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref("dataForNote/");
data.once("value").then(function (snapshot) {
  console.log(snapshot.val());
});
