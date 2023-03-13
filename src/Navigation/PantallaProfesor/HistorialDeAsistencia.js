import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, FlatList, StatusBar } from "react-native";
import { db } from "../../../database/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function HistorialDeAsistencia({ navigation: { navigate }, route }) {

    const [alumnos, setalumnos] = useState();
    const sede = route.params.sede
    const deporte = route.params.deporte
    const fecha = route.params.fecha

    async function cargarHistorial() {
        try {

            const lista = []
            const historialRef = collection(db, `Asistencia/${sede}/Cursos/${deporte}/Fechas/${fecha}/Alumnos`)
            const historialRefAsc = query(historialRef, orderBy("PApellidoAlumno", "asc"));
            const querySnapshot = await getDocs(historialRefAsc)
            querySnapshot.forEach((doc) => {
                lista.push(doc.data())
            });
            setalumnos(lista)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        cargarHistorial()
    }, []);

    function renderItem({ item }) {

        function condition( value ) {

            if( value == false ){
                return "Ausente";
            }

            if( value == true ){
                return "Presente";
            }
            
        }

        return (

            <View style={[styles.item, styles.shadow]}>

                <Text style={ styles.nameStudent }>{ item.PNombreAlumno + " " + item.PApellidoAlumno + " " + item.SApellidoAlumno }</Text>

                <Text style={ styles.rutstudents }>{ "Rut: " + item.Rut + " | Estado: "} {condition(item.Estado)} </Text>
                
            </View>

        )
    }

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar backgroundColor={'#F7D931'}/>

            <FlatList
                data = { alumnos }
                renderItem = { renderItem }
                keyExtractor = { item => item.Rut }
            />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    item: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden'
    },

    nameStudent: {
        fontSize: 20,
        textTransform: 'capitalize'
    },

    rutstudents:{
        fontSize: 20,
    },

    shadow: {
        borderColor: '#EBEBEB',
        borderBottomWidth: 2,
        borderRightWidth: 2.5,
        borderLeftWidth: 1
    },

});

export default HistorialDeAsistencia;