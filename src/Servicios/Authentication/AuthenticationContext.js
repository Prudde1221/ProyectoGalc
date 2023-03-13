import React, { useState, createContext, useEffect} from "react";
import { auth } from "../../../database/firebase";
import { onAuthStateChanged, signOut, updateEmail } from "firebase/auth";
import { loginRequest } from "./AuthenticationService";
import { infoUserRequest } from "../Firestore/FirestoreService";
import { ResetPassword } from "./AuthenticationSendMail";
import { ChangeEmail } from "./AuthenticationChangeEmail";
import { ChangeNumberPhone } from "../Firestore/ChangerNumberPhone";


export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    useEffect(() => {
        persistanceUser()
    }, []);

    const [isLoading, setisLoading] = useState(false);
    const [user, setuser] = useState(null);
    const [infoUser, setinfoUser] = useState(null);
    const [errorResetEmail, seterrorResetEmail] = useState(null);
    const [errorResetPassword, seterrorResetPassword] = useState(null);
    const [errorphone, seterrorphone] = useState(null);
    const [error, seterror] = useState(null);
    const persistanceUser = () =>{
        setisLoading(true)
        onAuthStateChanged(auth, (user) =>{
            if(user){
                infoUserRequest( user.email )
                .then((iu) => {
                    setinfoUser(iu)
                    setuser(user);
                    setisLoading(false);
                }).catch((e) => {
                    console.log(e);
                })
            }
        })
        setisLoading(false)
    }
    const onLogin = ( email, password ) => {
        setisLoading(true);
        loginRequest( email, password )
        .then((u) => {
            infoUserRequest( email )
            .then((iu) => {
                setinfoUser(iu)
                setisLoading(false);
                setuser(u.user);
            }).catch((e) => {
                console.log(e);
            })
        }).catch((e) => {
            const errorCode = e.code;
            setisLoading(false);
            seterror("Tu contraseña no es correcta. Vuelve a comprobarla.");
        });
    };
    const emailResetPassword = (email) => {
        setisLoading(true)
        ResetPassword(email)
        .then(() => {
            setisLoading(false)
            seterrorResetPassword("Te hemos enviado un correo electrónico. Solo tienes que seguir las instrucciones para restablecer tu contraseña.")
          })
          .catch((error) => {
            const errorCode = error.code;
            setisLoading(false)
            if (errorCode == "auth/invalid-email") {
                seterrorResetPassword("Dirección de correo electrónico no encontrado.");
            }
        });
    };
    const onLogOut = () => {
        signOut(auth).then(() => {
            setuser(null);
            setinfoUser(null)
        }).catch((error) => {
            console.log(error);
        });
    };
    const emailReset = ( newEmail ) => {
        setisLoading(true)
        ChangeEmail(user, newEmail).then(() => {
            setisLoading(false)
            //cambiar direccion de correo en el firestore el cambio se ve solamente reflejado en el authentication
            seterrorResetEmail("Cambio de dirección de correo electrónico exitoso. El cambio realizado se verá reflejado al iniciar sesión nuevamente.")
        }).catch((error) => {
            setisLoading(false)
            seterrorResetEmail("Debe volver a iniciar sesión para realizar este cambio.")
        });
    };
    const numberPhoneReset = ( newNumber ) => {
        setisLoading(true)
        ChangeNumberPhone(user.email, newNumber)
        seterrorphone("Cambio de numero telefónico  exitoso. El cambio realizado se verá reflejado al iniciar sesión nuevamente.")
        setisLoading(false)
    };

    return(
        <AuthenticationContext.Provider
            value={{

                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                infoUser,
                errorResetPassword,
                onLogin,
                emailResetPassword,
                onLogOut,
                persistanceUser,
                emailReset,
                errorResetEmail,
                numberPhoneReset,
                errorphone
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}