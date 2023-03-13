import React, { useState } from "react";
import {Text, StyleSheet, View, TouchableWithoutFeedback,TouchableOpacity, TextInput, SafeAreaView, ScrollView , Alert, StatusBar} from 'react-native';
import { db } from "../../../database/firebase";
import { setDoc, doc, query, collection, getDocs } from "firebase/firestore";

const sedes = ['Centro La Ermita', 'Centro La Virgen', 'Centro Los Cisnes', 'Centro Newen', 'Centro Patricio Mekis', 'Centro Quillota','Centro Recoleta', 'Centro Villa Portales'];

function FormularioProf({navigation: {navigate}}) {

  const [FormularioData, setFormularioData] = useState(defaultFormularioValues())

  const onChange = (e, type) => {
      setFormularioData({ ...FormularioData, [type]: e.nativeEvent.text })

  }

  async function ingresarProf () {

    await setDoc(doc(db, `Usuarios/${FormularioData.Rut}`), {

      Rut: `${FormularioData.Rut}`,

      Edad: `${FormularioData.Edad}`,

      PNombreProfesor: `${FormularioData.PNombreProf}`,

      SNombreProfesor: `${FormularioData.SNombreProf}`,

      PApellidoProfesor: `${FormularioData.PApellidoProf}`,

      SApellidoProfesor: `${FormularioData.SApellidoProf}`,

      Correo: `${FormularioData.CorreoProf}`,

      NumeroTelProfesor: `${FormularioData.NumeroTelProf}`,

      Cargo: `Profesor`,
    });


  }

  return(
    <SafeAreaView style = {[styles.container, {justifyContent: 'center'}]}>

      <StatusBar backgroundColor={'#2D6BC2'} />

      <ScrollView style={styles.container}>

        <View>
          <Text style = {styles.Text}>Ingrese Rut del Profesor:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: 12.345.678-9"
              onChange = {(e) => onChange(e, "Rut")}
              keyboardType = 'number-pad'
              maxLength={9}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Edad del Profesor:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: 30"
              onChange = {(e) => onChange(e, "Edad")}
              keyboardType = "number-pad"/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Primer Nombre Profe. :</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Jorge"
              onChange = {(e) => onChange(e, "PNombreAlumno")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Segundo Nombre Profe. :</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Andrés"
              onChange = {(e) => onChange(e, "SNombreAlumno")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Primer Apellido Profe. :</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Rodríguez"
              onChange = {(e) => onChange(e, "PApellidoAlumno")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Segundo Apellido Profe. :</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Álvarez"
              onChange = {(e) => onChange(e, "SApellidoAlumno")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Correo Profe. :</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: JARA@gmail.com"
              onChange = {(e) => onChange(e, "CorreoAlumno")}
              keyboardType = "email-address"/>
        </View>
        
        <View>
          <Text style = {styles.Text}>Ingrese Numero Telefónico:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: 49441383"
              onChange = {(e) => onChange(e, "NumeroTelAlumno")}
              keyboardType = "number-pad"
              maxLength={8}/>
        </View>
        

        <TouchableOpacity style={styles.continuar} onPress={() => { ingresarProf(), Alert.alert("Usuario Ingresado")  ,navigate('Home Administrador') }}>

          <Text style={styles.textContinuar}>Registrar{'>'} </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
};



const defaultFormularioValues = () => {
    return {

        Rut: "",

        Edad: "",

        PNombreProf: "",

        SNombreProf: "",

        PApellidoProf: "",

        SApellidoProf: "",

        CorreoProf: "",

        NumeroTelProf: "",

    }
};

const styles = StyleSheet.create({

  container:{
    flex: 1
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

  shadow: {
    borderColor: '#EBEBEB',
    borderBottomWidth: 2,
    borderRightWidth: 2.5,
    borderLeftWidth: 0.5
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


  continuar: {
    width: 150,
    height: 60,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#2D6BC2',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textContinuar: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
});

export default FormularioProf;