import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screens
import HomeAlumno from "./PantallaAlumno/HomeAlumno";
import ListaProfesores from "./PantallaAlumno/ListaProfesores";
import ConfiguracionAlumnno from "./PantallaAlumno/ConfiguracionAlumno";
import Talleres from "./PantallaProfesor/Talleres";
import Horario from "./PantallaProfesor/Horario";
import { HistorialAlumno } from "./PantallaAlumno/HistorialAlumno";
import CursoAlumno from "./PantallaAlumno/TallerAlumno";
import CambiarEmail from "./PantallaProfesor/CambiarEmail";
import CambiarNumeroTelefono from "./PantallaProfesor/CambiarNumeroTelefono";

const Stack = createNativeStackNavigator();

//Flow Alumno
export const AlumnoNavigator = () => { 

    return(

        <Stack.Navigator         
            initialRouteName="Home Alumno"
        >

            <Stack.Screen 
                name="Home Alumno" 
                component={HomeAlumno} 
                options={{headerShown: (false)}}
            />

            <Stack.Screen 
                name="ListaProfesores" 
                component={ListaProfesores} 
                options={{title:"Profesores" , headerTintColor: 'black', headerStyle: { backgroundColor:'#F7D931'}}}
            />

            <Stack.Screen 
                name="Configuracion" 
                component={ConfiguracionAlumnno} 
                options={{ title:"Configuracion" , headerTintColor: 'white', headerStyle: { backgroundColor:'#F36A34'}}}
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
                name="CursoAlumno" 
                component={CursoAlumno} 
                options={{ title:"Curso" , headerTintColor: 'white', headerStyle: { backgroundColor:'#2D6BC2'}}}
            />

            <Stack.Screen 
                name="Talleres" 
                component={Talleres} 
                options={{ title:"Talleres" , headerTintColor: 'white', headerStyle: { backgroundColor:'#E63642'}}}
            />

            <Stack.Screen 
                name="Horario" 
                component={Horario} 
                options={{ title:"Horario" , headerTintColor: 'white', headerStyle: { backgroundColor:'#E63642'}}}
            />

            <Stack.Screen 
                name="Historial" 
                component={HistorialAlumno} 
                options={{ title:"Historial de Asistencia" , headerTintColor: 'white', headerStyle: { backgroundColor:'#20A83E'}}}
            />

        </Stack.Navigator>
    )
}