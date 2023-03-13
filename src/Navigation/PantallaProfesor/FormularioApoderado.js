import React, { useState, useEffect } from "react";
import {Text, StyleSheet, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, TextInput, SafeAreaView, FlatList, Alert, StatusBar} from 'react-native';
import { db } from "../../../database/firebase";
import { doc, updateDoc, query, collection, getDocs } from "firebase/firestore";


function FormularioApoderado({navigation: {navigate}, route}) {

    const [cursos, setcursos] = useState();
    const [cursosIdx, setcursosIdx] = useState(0);
    const [idCurso, setidCurso] = useState();
    const [FormularioData, setFormularioData] = useState(defaultFormularioValues())

    async function loadData(){

        try{

            const sede = route.params.sede
            const refSede = query(collection(db, `Asistencia/${sede}/Cursos` ));
            const querySnapshot = await getDocs(refSede)
            setcursos(querySnapshot.docs)
        }

        catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, []);

    const onChange = (e, type) => {
        setFormularioData({ ...FormularioData, [type]: e.nativeEvent.text })
    }

    async function Confirmar ( id ) {

        await updateDoc(doc(db, `Usuarios/${route.params.RutData}`), {

            NombresApoderado: `${FormularioData.NombresApoderado}`,

            ApellidosApoderado: `${FormularioData.ApellidosApoderado}`,

            CorreoApoderado: `${FormularioData.CorreoApoderado}`,

            TelefonoApoderado: `${FormularioData.TelefonoApoderado}`,

            IDCurso: [id]
        });
    }

    return(
        <SafeAreaView style = {styles.container}>

            <StatusBar backgroundColor={'#F36A34'}/>

            <ScrollView style={styles.container}>

                <CustomPickerCursos 
                    label={"Seleccione curso del alumno"}
                    data={cursos}
                    currentIndex={cursosIdx}
                    onSelected={setcursosIdx}
                    onSelectedId={setidCurso}
                />

<View>
                    <Text style = {styles.Text}>Ingrese Nombres Apoderado:</Text>
                        <TextInput
                            style = {styles.TextInputs} 
                            placeholder = "Ejemplo: Jorge Andrés"
                            onChange = {(e) => onChange(e, "NombresApoderado")}>
                        </TextInput>
                </View>

                <View>
                    <Text style = {styles.Text}>Ingrese Apellidos Apoderado:</Text>
                        <TextInput
                            style = {styles.TextInputs} 
                            placeholder = "Ejemplo: Rodríguez Álvarez"
                            onChange = {(e) => onChange(e, "ApellidosApoderado")}>
                        </TextInput>
                </View>

                <View>
                    <Text style = {styles.Text}>Ingrese Correo Apoderado:</Text>
                        <TextInput
                            style = {styles.TextInputs} 
                            placeholder = "Ejemplo: JARA@gmail.com"
                            onChange = {(e) => onChange(e, "CorreoApoderado")}>
                        </TextInput>
                </View>

                <View>
                    <Text style = {styles.Text}>Ingrese Numero Telefónico:</Text>
                        <TextInput
                            style = {styles.TextInputs} 
                            placeholder = "Ejemplo: 49441383"
                            onChange = {(e) => onChange(e, "TelefonoApoderado")}>
                        </TextInput>
                </View>

                <TouchableOpacity style = {styles.continuar} onPress={() => { Confirmar(idCurso), Alert.alert("Usuario Ingresado")  ,navigate('Home Profesor') }}>
                    <Text style = {styles.textContinuar}>Registrar Alumno</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )
}

const CustomPickerCursos = ({ label, data, currentIndex, onSelected, onSelectedId }) => {

    return (
      <>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.wrapperHorizontal}>
          <FlatList
            bounces
            horizontal
            data={data}
            keyExtractor={( item ) => item.id}
            renderItem={({ item, index }) => {
              const selected = index === currentIndex;
              return (
                <TouchableWithoutFeedback onPress={() => { onSelected(index), onSelectedId(item.data().IDCurso) }}>
                  <View
                    style={[
                      styles.itemStyleHorizontal,
                      selected && styles.itemSelectedStyleHorizontal,
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: selected ? 'black' : 'grey',
                        fontWeight: selected ? 'bold' : 'normal',
                      }}>
                      {item.id + ''}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
      </>
    );
};

const defaultFormularioValues = () => {
    return {


        NombresApoderado: "",

        ApellidosApoderado: "",

        CorreoApoderado: "",

        TelefonoApoderado: "",
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1
    },

    title:{
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    
    wrapperHorizontal: {
    height: 60,
    color: 'black',
    },

    itemStyleHorizontal: {
    marginHorizontal: 10,
    height: 55,
    padding: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
    },

    itemSelectedStyleHorizontal: {
    borderWidth: 2,
    borderColor: 'rgba(111, 202, 186, 1)',
    },

    TextInputs: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        fontSize: 20,
        padding: 10,
        borderRadius: 15,
        overflow: 'hidden',
    },
    
    Text: {
        fontWeight: 'bold',
        marginTop: 25,
        marginHorizontal: 30,
        fontSize: 20,
    },

    continuar: {
        width: 150,
        height: 60,
        marginTop: 20,
        marginBottom: 40,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'rgba(111, 202, 186, 1)',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textContinuar: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },

})


export default FormularioApoderado;