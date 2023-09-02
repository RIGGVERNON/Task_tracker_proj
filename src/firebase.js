// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCSYY0GrPaeNOqoR6Sm10H2nAFSxRIIMUk",
    authDomain: "task-tracker-598ea.firebaseapp.com",
    projectId: "task-tracker-598ea",
    storageBucket: "task-tracker-598ea.appspot.com",
    messagingSenderId: "697904664205",
    appId: "1:697904664205:web:35c3bd9a78764dc682dcc4"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;