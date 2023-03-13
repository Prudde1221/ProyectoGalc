import React from "react";
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from "react-native";

function AdminAlum( {navigation: {navigate}, route}) {

    function NavegarALaFuncion( PantallaSeleccionada ) {

        if( `${PantallaSeleccionada}` == "Agregar" ){

            navigate('Formulario')

        }
        if( `${PantallaSeleccionada}` == "Eliminar" ){

            navigate('ElimAlum')

        }

    }
    return (
        <SafeAreaView style={styles.container}>

            <StatusBar backgroundColor={'#F36A34'}/>

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>


                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Agregar" ) }>

                    <Text style={styles.textCentro}>Agregar Alumno</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Eliminar" ) }>

                    <Text style={styles.textCentro}>Eliminar Alumno</Text>

                </TouchableOpacity>

            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
    },

    botones:{
        width: '80%',
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderRadius: 15,
        backgroundColor: 'white'
    },

    shadow: {
        borderColor: '#EBEBEB',
        borderBottomWidth: 2,
        borderRightWidth: 2.5,
        borderLeftWidth: 0.5
    },

    textCentro:{
        fontSize: 28,
        fontWeight: '170',
        alignSelf: 'center',
    },

});

export default AdminAlum;