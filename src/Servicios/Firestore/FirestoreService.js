import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../database/firebase";

export const infoUserRequest = async ( email ) => {

    try {

        const alumno = doc(db, `Usuarios/${email}`)
        const QueryDoc = await getDoc(alumno)
        const datosAlumno = QueryDoc.data();
        return datosAlumno
  
    } catch (error) {
        console.log(error)
    }
}