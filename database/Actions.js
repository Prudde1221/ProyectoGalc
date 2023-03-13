import { app } from "./firebase";
import * as firebase from 'firebase'
import 'firebase/firestore'

const db = firebase.firestore( app )

export const isUserLogged = () => {
    let isLogged = false
    firebase.auth()
}