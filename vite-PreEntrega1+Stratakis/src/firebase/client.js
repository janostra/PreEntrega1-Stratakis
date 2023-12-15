import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

 

const firebaseConfig = {
    apiKey: "AIzaSyBxTIeFE2yDqf8ArcxX8TQzLIJ9hWZa-jY",
    authDomain: "jstegnology.firebaseapp.com",
    projectId: "jstegnology",
    storageBucket: "jstegnology.appspot.com",
    messagingSenderId: "590312470022",
    appId: "1:590312470022:web:9f2b6afd67b3a86ca4b587"
  };

 

const app = initializeApp(firebaseConfig);

export const db = getFirestore();