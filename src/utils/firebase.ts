import { firebase } from '@firebase/app'
import '@firebase/firestore'

const config = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.GATSBY_FIREBASE_APPID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENTID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

export {db}
