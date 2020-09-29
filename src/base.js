import * as firebase from 'firebase/app';
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app= firebase.initializeApp ( {
    apiKey: "AIzaSyAUI8XT3gbhcVWHHA_LCEd7x_CGTIEa8As",
    authDomain: "frogtestapp-9e87a.firebaseapp.com",
    databaseURL: "https://frogtestapp-9e87a.firebaseio.com",
    projectId: "frogtestapp-9e87a",
    storageBucket: "frogtestapp-9e87a.appspot.com",
    messagingSenderId: "44308921618",
    appId: "1:44308921618:web:7a6524df003556272b47cb",
    measurementId: "G-BCYC6H0JQV"
  });

export default app;