import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZLAdeZv-uJ-8ejLDmryHSeC279UxTizI",
  authDomain: "ganemoslealacallehitoiii.firebaseapp.com",
  projectId: "ganemoslealacallehitoiii",
  storageBucket: "ganemoslealacallehitoiii.appspot.com",
  messagingSenderId: "341460642435",
  appId: "1:341460642435:web:fd7b948ea57790147c89b6"
};


if (!getApps.length) {

  var app = initializeApp(firebaseConfig) 

}

export const db = getFirestore();

export const auth = getAuth();



