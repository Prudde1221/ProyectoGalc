import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, StatusBar, View } from "react-native";
import { db } from "../../../database/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


function CursoAlumno({navigation: {navigate}, route}) {

    const idCurso = route.params.Curso

    const [data, setdata] = useState();

    async function loadData(){

        try{

            const refUsuarios = query(collection( db, `Usuarios` ));
            const students = query(refUsuarios, where("IDCurso", "array-contains", idCurso[0]));
            const querySnapshot = await getDocs(students)
            setdata(querySnapshot.docs)
            
        }

        catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, []);

    function renderItem ({item}){

        return(
            <View style={[styles.cardstudents, styles.shadow]}>

                <Text style={styles.namestudents}>{item.data().PNombreAlumno} {item.data().PApellidoAlumno} {item.data().SApellidoAlumno}</Text>
                <Text style={styles.rutstudents}>{item.data().Rut}</Text>
    
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar backgroundColor={'#2D6BC2'}/>
            <FlatList
                data={ data }
                renderItem = {renderItem}
                keyExtractor = {item => item.id}
            />

            <View style={{height: 30}}></View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    cardstudents:{
        width: '80%',
        height: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: 'white'
    },

    shadow: {
        borderColor: '#EBEBEB',
        borderBottomWidth: 2,
        borderRightWidth: 2.5,
        borderLeftWidth: 0.5
    },

    namestudents:{
        fontSize: 25,
        fontWeight: '170',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },

    rutstudents:{
        fontSize: 20,
        fontWeight: '170',
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontStyle: 'italic',
    },

    emailstudents:{
        fontSize: 20,
        fontWeight: '170',
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontStyle: 'italic',
    },
});

export default CursoAlumno;