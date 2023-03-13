import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, StatusBar } from "react-native";
import { db } from "../../../database/firebase";
import { collection, getDocs, query } from "firebase/firestore";


function Talleres({navigation: {navigate}, route}) {

    const sede = route.params.sede

    const [data, setdata] = useState();

    async function loadData(){

        try{
            
            //Definimos la referencia de la coleccion y la entregaremos a la variable data como un array.
            const refSede = query(collection(db, `Asistencia/${sede}/Cursos` ));
            const querySnapshot = await getDocs(refSede)
            setdata(querySnapshot.docs)
            
        }

        catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, []);

    function NavegarALaFuncion( sedeSeleccionada, deporteSelecionado, IDdelcurso ) {

        if( `${route.params.Pantalla}` == `Horario` ){

            navigate( `${route.params.Pantalla}` , { idcurso: IDdelcurso})
            
        }

        if( `${route.params.Pantalla}` == `ListaDeAsistencia` ){

            navigate( `${route.params.Pantalla}` , { sede: sedeSeleccionada , deporte: deporteSelecionado, idcurso: IDdelcurso })

        }

        if( `${route.params.Pantalla}` == `ListaDeAsistencia` ){

            navigate( `${route.params.Pantalla}` , { sede: sedeSeleccionada , deporte: deporteSelecionado, idcurso: IDdelcurso })

        }

        if( `${route.params.Pantalla}` == `Curso` ){

            navigate( `${route.params.Pantalla}` , { sede: sedeSeleccionada , deporte: deporteSelecionado, idcurso: IDdelcurso })

        }
        if( `${route.params.Pantalla}` == `Fechas` ){

            navigate( `${route.params.Pantalla}` , { sede: sedeSeleccionada , deporte: deporteSelecionado, idcurso: IDdelcurso })

        }
    }

    function renderItem ({item}){

        return(
            <TouchableOpacity style={[styles.botones, styles.shadow,]} onPress={() =>  NavegarALaFuncion( route.params.sede, item.id, item.data().IDCurso ) }>
                <Text style={styles.textCentro}>{ item.id }</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar backgroundColor={'#E63642'}/>
            <FlatList
                data={ data }
                renderItem = {renderItem}
                keyExtractor = {item => item.id}
            />

        </SafeAreaView>
    )
}

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
});

export default Talleres;