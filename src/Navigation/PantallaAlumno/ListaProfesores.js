import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, FlatList, Alert, TouchableOpacity, StatusBar } from "react-native";
import { db } from "../../../database/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import * as Clipboard from 'expo-clipboard';
import Toast from "react-native-root-toast";


function ListaProfesores() {

    const [Profesores, setProfesores] = useState();

    async function cargarLista() {
        try {

            const lista = []
            const ProfesoresRef = collection(db, `Usuarios`)
            const listaProfesores = query(ProfesoresRef, where("Cargo", "==", "Profesor"));
            const querySnapshot = await getDocs(listaProfesores)
            querySnapshot.forEach((doc) => {
                lista.push(doc.data())
            });
            setProfesores(lista)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        cargarLista()
    }, []);

    function renderItem({ item }) {

        return (

            <View style={[ styles.item, styles.shadow ]}>

                <StatusBar backgroundColor={'#F7D931'}/>

                <Text style={ styles.nameStudent }>{  item.PNombreProfesor + " " + item.PApellidoProfesor + " " + item.SApellidoProfesor }</Text>

                <Text style={ styles.rutstudents }>{ "Rut: " + item.Rut  }</Text>

                <View style = {[ styles.container, { flexDirection: 'row' } ]}>

                    <Text style = { styles.rutstudents }>Correo: </Text>

                    <TouchableOpacity style = { styles.botoncopiar } onPress= {() => {Clipboard.setStringAsync(item.Correo), Toast.show("Correo Copiado", {duration: 720, position: Toast.positions.BOTTOM, shadow: true, animation: true, delay: 0}) }}>

                        <Text style={[ styles.rutstudents, { color: 'blue', fontWeight: 'bold' } ]}>{ item.Correo }</Text>

                    </TouchableOpacity>

                </View>

                <View style = {[ styles.container, {flexDirection: 'row'} ]}>

                    <Text style = { styles.rutstudents }>Teléfono: </Text>

                    <TouchableOpacity style = { styles.botoncopiar } onPress= {() => {Clipboard.setStringAsync(item.NumeroTelProfesor), Toast.show("Numero Copiado", {duration: 720, position: Toast.positions.BOTTOM, shadow: true, animation: true, delay: 0}) }}>

                        <Text style={[ styles.rutstudents, { color: 'blue', fontWeight: 'bold' } ]}>{ item.NumeroTelProfesor }</Text>

                    </TouchableOpacity>

                </View>

            </View>

        )
    }

    return (

        <SafeAreaView style={styles.container}>

            <FlatList
                data = { Profesores }
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
        textTransform: 'capitalize',
        fontWeight: 'bold',
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

    botoncopiar:{
        height: 30,
        borderRadius: 15,
        alignSelf: 'flex-start',
    },

});

export default ListaProfesores;