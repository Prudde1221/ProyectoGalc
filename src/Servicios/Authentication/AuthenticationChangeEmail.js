import { updateEmail } from "firebase/auth"

export const ChangeEmail = ( user ,email ) => {

    return updateEmail( user, email)
}