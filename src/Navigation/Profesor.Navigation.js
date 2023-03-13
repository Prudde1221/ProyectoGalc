import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens
import HomeProfesor from "./PantallaProfesor/HomeProfesor";
import Configuracion from "./PantallaProfesor/Configuracion";
import Notificaciones from "./PantallaProfesor/Notificaciones";
import ConfiguracionDePerfil from "./PantallaProfesor/ConfiguracionDePerfil";
import TablonDeAnuncios from "./PantallaProfesor/TablonDeAnuncios";
import CentrosDeportivos from "./PantallaProfesor/CentrosDeportivos";
import Talleres from "./PantallaProfesor/Talleres";
import Horario from "./PantallaProfesor/Horario";
import ListaDeAsistencia from "./PantallaProfesor/ListaDeAsistencia";
import HistorialDeAsistencia from "./PantallaProfesor/HistorialDeAsistencia";
import Fechas from "./PantallaProfesor/Fechas";
import Inventario from "./PantallaProfesor/Inventario";
import Inventario2 from "./PantallaProfesor/Inventario2";
import Formulario from "./PantallaProfesor/Formulario";
import FormularioApoderado from "./PantallaProfesor/FormularioApoderado";
import Curso from "./PantallaProfesor/Curso";
import CambiarEmail from "./PantallaProfesor/CambiarEmail";
import CambiarNumeroTelefono from "./PantallaProfesor/CambiarNumeroTelefono";

const Stack = createNativeStackNavigator();

//Flow Profesor
export const ProfesorNavigator = () => {

    return(

        <Stack.Navigator
            initialRouteName="Home Profesor"
        >

            <Stack.Screen 
                name="Home Profesor" 
                component={HomeProfesor} 
                options={{headerShown: (false)}}
            />

            <Stack.Screen 
                name="Configuracion" 
                component={Configuracion} 
                options={{ title:"Configuración" , headerTintColor: 'white', headerStyle: { backgroundColor:'#F36A34'}}}
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

            <Stack.Screen 
                name="Notificaciones" 
                component={Notificaciones} 
                options={{title: "pruebas"  , headerStyle: {backgroundColor:'rgba(111, 202, 186, 1)'}}}
            />

            <Stack.Screen 
                name="ConfiguracionDePerfil" 
                component={ConfiguracionDePerfil} 
                options={{headerShown: (false)}}
            />

            <Stack.Screen 
                name="TablonDeAnuncios" 
                component={TablonDeAnuncios} 
                options={{headerShown: (false)}}
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
                name="Horario" 
                component={Horario} 
                options={{title: 'Horario', headerTintColor: 'white', headerStyle: { backgroundColor: '#E63642' }}}
            />

            <Stack.Screen 
                name="ListaDeAsistencia" 
                component={ListaDeAsistencia} 
                options={{title: 'Asistencia', headerTintColor: 'white', headerStyle: { backgroundColor: '#20A83E' }}}
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
                name="Inventario" 
                component={Inventario} 
                options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#2D6BC2' }}}
            />

            <Stack.Screen 
                name="Inventario2" 
                component={Inventario2} 
                options={{headerShown: (false)}}
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
                name="Curso" 
                component={Curso} 
                options={{title: 'Alumnos', headerTintColor: 'white', headerStyle: { backgroundColor: '#E63642' }}}
            />

            

        </Stack.Navigator>
    )
}


