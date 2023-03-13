import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../Servicios/Authentication/AuthenticationContext";

//Flow
import { AccountNavigator } from "./Account.Navigator";
import { ProfesorNavigator } from "./Profesor.Navigation";
import { AlumnoNavigator } from "./Alumno.Navigator";
import { AdministradorNavigator } from "./Administrador.Navigator";

export const Navigation = () => {

    const {isAuthenticated, infoUser } = useContext(AuthenticationContext);

    return (
        <NavigationContainer>
            {
                isAuthenticated ? (
                    infoUser.Cargo == "Profesor" ? (
                        //Listo
                        <ProfesorNavigator/>
                    ) : infoUser.Cargo == "Alumno" ? (
                        //Listo
                        <AlumnoNavigator/>
                    ) : infoUser.Cargo == "Administrador" ? (
                        //Listo
                        <AdministradorNavigator/>
                    ) : (console.log("Error en el flujo de navegacion de la app"))
                ) 
                : (
                    <AccountNavigator/>
                )
            }
        </NavigationContainer>
    )
};