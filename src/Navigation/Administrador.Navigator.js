import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens
import HomeAdministrador from "./PantallaAdministrador/HomeAdministrador";
import Configuracion from "./PantallaProfesor/Configuracion";
import AdminProf from "./PantallaAdministrador/AdminProf";
import AdminAlum from "./PantallaAdministrador/AdminAlum";
import FormularioProf from "./PantallaAdministrador/FormularioProf";
import ElimProfe from "./PantallaAdministrador/ElimProf";
import ElimAlum from "./PantallaAdministrador/ElimAlum";
import Inventario from "./PantallaAdministrador/AdminInventario";
import CentrosDeportivos from "./PantallaProfesor/CentrosDeportivos";
import Talleres from "./PantallaProfesor/Talleres";
import Formulario from "./PantallaProfesor/Formulario";
import FormularioApoderado from "./PantallaProfesor/FormularioApoderado";
import Curso from "./PantallaProfesor/Curso";
import Fechas from "./PantallaProfesor/Fechas";
import HistorialDeAsistencia from "./PantallaProfesor/HistorialDeAsistencia";
import CambiarEmail from "./PantallaProfesor/CambiarEmail";
import CambiarNumeroTelefono from "./PantallaProfesor/CambiarNumeroTelefono";
import AdminConfig from "./PantallaAdministrador/AdminConfig";

const Stack = createNativeStackNavigator();

//Flow Alumno
export const AdministradorNavigator = () => { 

    return(

        <Stack.Navigator         
            initialRouteName="Home Administrador"
        >

            <Stack.Screen 
                name="Home Administrador" 
                component={HomeAdministrador} 
                options={{headerShown: (false)}}
            />

            <Stack.Screen 
                name="Configuracion" 
                component={AdminConfig} 
                options={{ title:"Configuración" , headerTintColor: 'white', headerStyle: { backgroundColor:'#F36A34'}}}
            />

            <Stack.Screen 
                name="CentrosDeportivos" 
                component={CentrosDeportivos} 
                options={{title: 'Centros Deportivos', headerStyle: { backgroundColor: '#E63642' }, headerTintColor: 'white'}}
            />

            <Stack.Screen 
                name="Talleres" 
                component={Talleres} 
                options={{title: 'Talleres', headerTintColor: 'white', headerStyle: { backgroundColor: '#E63642' }}}
            />

            <Stack.Screen 
                name="Inventario" 
                component={Inventario} 
                options={{ title:"Inventario", headerTintColor: 'white' , headerStyle:{backgroundColor:'#20A83E'} }}
            />

            <Stack.Screen 
                name="AdminProf"
                component={AdminProf} 
                options={{ title:"Seleccionar Acción", headerTintColor: 'white' , headerStyle:{backgroundColor:'#2D6BC2'} }}
            />

            <Stack.Screen 
                name="FormularioProf"
                component={FormularioProf} 
                options={{ title: 'Datos Profesor', headerTintColor: 'white' , headerStyle: { backgroundColor: '#2D6BC2' } }}
            />

            <Stack.Screen 
                name="ElimProf"
                component={ElimProfe} 
                options={{ title:"Eliminar Profesor", headerTintColor: 'white' , headerStyle:{backgroundColor:'#2D6BC2'} }}
            />

            <Stack.Screen 
                name="AdminAlum"
                component={AdminAlum} 
                options={{ title:"Seleccionar Acción", headerTintColor: 'white' , headerStyle:{backgroundColor:'#F36A34'} }}
            />

            <Stack.Screen 
                name="Formulario" 
                component={Formulario} 
                options={{title: 'Datos Alumno', headerTintColor: 'white', headerStyle: { backgroundColor: '#F36A34' }}}
            />

            <Stack.Screen 
                name="FormularioApoderado" 
                component={FormularioApoderado} 
                options={{title: 'Datos Apoderado', headerTintColor: 'white', headerStyle: { backgroundColor: '#F36A34' }}}
            />

            <Stack.Screen 
                name="ElimAlum" 
                component={ElimAlum} 
                options={{ title:"Eliminar Alumno", headerTintColor: 'white' , headerStyle:{backgroundColor:'#F36A34'} }}
            />

            <Stack.Screen 
                name="HistorialDeAsistencia" 
                component={HistorialDeAsistencia} 
                options={{title: 'Historial Alumnos', headerStyle: { backgroundColor: '#F7D931' }}}
            />

            <Stack.Screen 
                name="Fechas" 
                component={Fechas} 
                options={{title: 'Historial de Fechas', headerStyle: { backgroundColor: '#F7D931' }}}
            />

            <Stack.Screen 
                name="Curso" 
                component={Curso} 
                options={{title: 'Alumnos', headerTintColor: 'white', headerStyle: { backgroundColor: '#E63642' }}}
            />

            <Stack.Screen 
                name="Cambiar Email" 
                component={CambiarEmail} 
                options={{ headerShown: (false)}}
            />

            <Stack.Screen 
                name="Cambiar Numero Telefono" 
                component={CambiarNumeroTelefono} 
                options={{ headerShown: (false)}}
            />

        </Stack.Navigator>
    )
}