import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../../../database/firebase"

export const ResetPassword = ( email ) => {

    return sendPasswordResetEmail(auth, email)
}