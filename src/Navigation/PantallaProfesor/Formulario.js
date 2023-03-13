import React, { useState } from "react";
import {Text, StyleSheet, View, TouchableWithoutFeedback,TouchableOpacity, TextInput, SafeAreaView, ScrollView , FlatList, StatusBar} from 'react-native';
import { db } from "../../../database/firebase";
import { setDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const sedes = ['Centro La Ermita', 'Centro La Virgen', 'Centro Los Cisnes', 'Centro Newen', 'Centro Patricio Mekis', 'Centro Quillota','Centro Recoleta', 'Centro Villa Portales'];

function Formulario({navigation: {navigate}, route}) {

  const [FormularioData, setFormularioData] = useState(defaultFormularioValues())
  const [sedesIdx, setsedesIdx] = useState(0);

  const onChange = (e, type) => {
      setFormularioData({ ...FormularioData, [type]: e.nativeEvent.text })

  }

  async function ingresarAlumno (sedeSeleccionada) {

    await setDoc(doc(db, `Usuarios/${FormularioData.CorreoAlumno}`), {

      Rut: `${FormularioData.Rut}`,

      Edad: `${FormularioData.Edad}`,

      FechaDeNac: `${FormularioData.FechaDeNac}`,

      PNombreAlumno: `${FormularioData.PNombreAlumno}`,

      SNombreAlumno: `${FormularioData.SNombreAlumno}`,

      PApellidoAlumno: `${FormularioData.PApellidoAlumno}`,

      SApellidoAlumno: `${FormularioData.SApellidoAlumno}`,

      Colegio: `${FormularioData.Colegio}`,

      Correo: `${FormularioData.CorreoAlumno}`,

      NumeroTelAlumno: `${FormularioData.NumeroTelAlumno}`,

      Sede: `${sedeSeleccionada}`,

      Cargo: "Alumno"

    });

  }

  function handleCreateAcount(){

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, FormularioData.CorreoAlumno, "pass12345")
    .then((userCredential) => {
      // Signed in
      console.log("USER CREATED"); 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return(
    <SafeAreaView style = {[styles.container, {justifyContent: 'center'}]}>

      <StatusBar backgroundColor={'#F36A34'}/>

      <ScrollView style={styles.container}>

      <View>
          <Text style = {styles.Text}>Ingrese Rut de Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: 12.345.678-9"
              onChange = {(e) => onChange(e, "Rut")}
              maxLength={12}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Edad del Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: 15"
              onChange = {(e) => onChange(e, "Edad")}
              keyboardType = "number-pad"/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Fecha de Nacimiento:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: 10/1/2002"
              onChange = {(e) => onChange(e, "FechadeNac")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Primer Nombre Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Jorge"
              onChange = {(e) => onChange(e, "PNombreAlumno")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Segundo Nombre Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Andrés"
              onChange = {(e) => onChange(e, "SNombreAlumno")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Primer Apellido Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Rodríguez"
              onChange = {(e) => onChange(e, "PApellidoAlumno")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Segundo Apellido Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Álvarez"
              onChange = {(e) => onChange(e, "SApellidoAlumno")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Colegio Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: Liceo de Aplicación"
              onChange = {(e) => onChange(e, "Colegio")}/>
        </View>

        <View>
          <Text style = {styles.Text}>Ingrese Correo Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: JARA@gmail.com"
              onChange = {(e) => onChange(e, "CorreoAlumno")}
              keyboardType = "email-address"/>
        </View>
        
        <View>
          <Text style = {styles.Text}>Ingrese Numero Telefónico Alumno:</Text>
            <TextInput
              style = {[styles.TextInputs, styles.shadow]} 
              placeholder = "Ejemplo: 49441383"
              onChange = {(e) => onChange(e, "NumeroTelAlumno")}
              keyboardType = "number-pad"
              maxLength={8}/>
        </View>
        
        <CustomPickerSede
          label="Seleccione Sede"
          data={sedes}
          currentIndex={sedesIdx}
          onSelected={setsedesIdx}
        />

        <TouchableOpacity style={styles.continuar} onPress={() => {ingresarAlumno(sedes[sedesIdx]), handleCreateAcount(), navigate('FormularioApoderado', { RutData: FormularioData.Rut, sede: sedes[sedesIdx] })}}>

          <Text style={styles.textContinuar}>Continuar {'>'} </Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
};

const CustomPickerSede = ({ label, data, currentIndex, onSelected }) => {

  return (
    <>
      <Text style={styles.title}>{label}</Text>
      <View style={styles.wrapperHorizontal}>
        <FlatList
          bounces
          horizontal
          data={data}
          keyExtractor={(item, idx) => String(item)}
          renderItem={({ item, index }) => {
            const selected = index === currentIndex;
            return (
              <TouchableWithoutFeedback onPress={() => onSelected(index)}>
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
                    {item + ''}
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

        Rut: "",

        Edad: "",

        FechaDeNac: "",

        PNombreAlumno: "",

        SNombreAlumno: "",

        PApellidoAlumno: "",

        SApellidoAlumno: "",

        Colegio: "",

        CorreoAlumno: "",

        NumeroTelAlumno: "",

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
    borderColor: '#F36A34',
  },


  continuar: {
    width: 150,
    height: 60,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#F36A34',
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

export default Formulario;