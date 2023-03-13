import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import InicioDeSesion from "./PantallaAccount/InicioDeSesion";
import RecuperacionCuenta from "./PantallaAccount/RecuperacionCuenta";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {

    return(

        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={"Inicio De Sesion"}
        >
    
            <Stack.Screen name="Inicio De Sesion" component={InicioDeSesion} />
            <Stack.Screen name="Recuperacion De Cuenta" component={RecuperacionCuenta} />
    
        </Stack.Navigator>
    
    )

}
