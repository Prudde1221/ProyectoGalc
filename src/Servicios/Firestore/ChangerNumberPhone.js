import { db } from "../../../database/firebase"
import { updateDoc, doc } from "firebase/firestore"

export const ChangeNumberPhone = async ( email, newNumber ) => {

    await updateDoc(doc(db, `Usuarios/${email}`), {
        NumeroTelProfesor: `${newNumber}`,
    });

}