import { db } from "../../../database/firebase"
import { updateDoc, doc } from "firebase/firestore"

export const ChangeEmailFirestore = async ( email, newEmail ) => {
    try {

        const Usuario = doc(db, `Usuarios/${email}`)
        const QueryDoc = await getDoc(Usuario)
        const datosAlumno = QueryDoc.data();
        return datosAlumno

        await updateDoc(doc(db, `Usuarios/${email}`), {
            Correo: `${newEmail}`,
        });
  
    } catch (error) {
        console.log(error)
    }
}