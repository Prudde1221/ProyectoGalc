import React, {useEffect, useState} from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList } from "react-native";
import { db } from "../../../database/firebase";
import { collectionGroup, getDocs, query } from "firebase/firestore";


export const HistorialAlumno = ({ navigation: {navigate}, route }) => {

    const rut = route.params.rutAlumno
    const [alumno, setalumno] = useState();

    async function historialAlumno() {

        try{
            const lista = []
            const museums = query(collectionGroup(db, 'Alumnos') );
            const querySnapshot = await getDocs(museums);
            querySnapshot.forEach((doc) => {
                if(doc.id == rut ){
                    lista.push(doc.data())
                }
            });
            setalumno(lista)
        }

        catch (error){
            console.log(error)
        }
        
    }
  
    useEffect(() => {
        historialAlumno();
    }, []);

    function renderHistorial({item}) {

        function condition( value ) {

            if( value == false ){
                return "Ausente";
            }

            if( value == true ){
                return "Presente";
            }
            
        }
        

        return(
            <View style={[styles.item, styles.shadow]}>

                <Text style={ styles.nameStudent }>Fecha: {item.dia + "/ "+ item.mes + "/ "+ item.año}</Text>
                <Text style={ styles.rutstudents }>Estado: {condition(item.Estado)}</Text>

            </View>
        )

    }


    return(

        <SafeAreaView>

            <FlatList 
                data={ alumno }
                renderItem={renderHistorial}
                keyExtractor={item => item.dia}
            />

        </SafeAreaView>

    );

}; 

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    botones:{
        width: '80%',
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 15,
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

    shadow: {
        borderColor: '#EBEBEB',
        borderBottomWidth: 2,
        borderRightWidth: 2.5,
        borderLeftWidth: 1
    },

    nameStudent: {
        fontSize: 25,
        textTransform: 'capitalize'
    },

    rutstudents:{
        fontSize: 20,
    },
});