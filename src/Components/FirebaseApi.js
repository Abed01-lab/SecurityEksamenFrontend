import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyA-N6hlPLGfE6QMLusxmzJTIOeMBUeBmZI",
    authDomain: "securityeksamenprojekt.firebaseapp.com",
    projectId: "securityeksamenprojekt",
    storageBucket: "securityeksamenprojekt.appspot.com",
    messagingSenderId: "1046863409919",
    appId: "1:1046863409919:web:751ca3d63457d7432e52ca",
    measurementId: "G-7TPX7LMEMZ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function FirebaseApi() {

    const checkUser = () => {
        return useAuthState(auth)
    } 


    return {

    }
}

export default FirebaseApi
