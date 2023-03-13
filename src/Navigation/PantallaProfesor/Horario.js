import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, FlatList, StatusBar } from "react-native";
import { db } from "../../../database/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


function Horario({navigation: {navigate}, route}) {

    const idcurso = route.params.idcurso

    const [data, setdata] = useState();

    async function loadData(){
        try {
            const refCursos = collection(db, "Horario")
            const filtroCurso = query(refCursos, where("IDCurso", "==", idcurso))
            const querySnapshot = await getDocs(filtroCurso)
            setdata(querySnapshot.docs)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, []);

    function mostrarHorario({item}) {

        return (

            <SafeAreaView style={styles.container}>

                <View style={[styles.window, styles.shadow]}>

                    <View style={styles.topWindow}>

                        <Text style={styles.dia}>Lunes</Text>

                    </View>

                    <View style={styles.botWindow}>

                        <Text style={styles.hora}>{item.data().Lunes}</Text>

                    </View>

                </View>

                <View style={[styles.window, styles.shadow]}>

                    <View style={styles.topWindow}>

                        <Text style={styles.dia}>Martes</Text>

                    </View>

                    <View style={styles.botWindow}>

                        <Text style={styles.hora}>{item.data().Martes}</Text>

                    </View>

                </View>

                <View style={[styles.window, styles.shadow]}>

                    <View style={styles.topWindow}>

                        <Text style={styles.dia}>Miércoles</Text>

                    </View>

                    <View style={styles.botWindow}>

                        <Text style={styles.hora}>{item.data().Miércoles}</Text>

                    </View>

                </View>

                <View style={[styles.window, styles.shadow]}>

                    <View style={styles.topWindow}>

                        <Text style={styles.dia}>Jueves</Text>

                    </View>

                    <View style={styles.botWindow}>

                        <Text style={styles.hora}>{item.data().Jueves}</Text>

                    </View>

                </View>

                <View style={[styles.window, styles.shadow]}>

                    <View style={styles.topWindow}>

                        <Text style={styles.dia}>Viernes</Text>

                    </View>

                    <View style={styles.botWindow}>

                        <Text style={styles.hora}>{item.data().Viernes}</Text>

                    </View>

                </View>


            </SafeAreaView>

        )
        
    }

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar backgroundColor={'#E63642'}/>
            <FlatList
                data={ data }
                renderItem = {mostrarHorario}
                keyExtractor = {item => item.id}
            />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    window:{
        width: '90%',
        height: 110,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 15,
        backgroundColor: 'white',
        overflow: 'hidden'
    },

    topWindow: {
        flex: 0.7,
        backgroundColor: '#E63642',
        justifyContent: 'center'
    },

    botWindow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    shadow: {
        borderColor: '#EBEBEB',
        borderBottomWidth: 2,
        borderRightWidth: 2.5,
        borderLeftWidth: 0.5
    },

    dia:{
        fontSize: 25,
        marginLeft: 20,
        color: 'white'
    },

    hora:{
        fontSize: 20
    },
});

export default Horario;