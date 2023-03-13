import React, { useState } from "react";
import {View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Notification from 'expo-notifications'

const Notificaciones = () =>{

  const [NotiData, setNotiData] = useState(defaultNotiValues())

  const onChange = (e, type) => {
    setNotiData({ ...NotiData, [type]: e.nativeEvent.text })

  }

  const handleNotification = () => {

    Notification.scheduleNotificationAsync({

      content: {

        title: `${NotiData.curso}` + ' - ' + `${NotiData.sede}`,

        body: 'Profesor: ' + `${NotiData.profesor}` + ' | Comienza en: ' + `${NotiData.minutos}` + ' minutos',

      },

      trigger: {

        seconds: 5

      },

    });

};
  return(
    <View style = { styles.container }>

        <TextInput
          style = {[styles.TextInputs, styles.shadow]} 
          placeholder = "Ingresa Taller Deportivo"
          onChange = {(e) => onChange(e, "curso")}>
        </TextInput>

        <TextInput
          style = {[styles.TextInputs, styles.shadow]} 
          placeholder = "Ingresa Sede"
          onChange = {(e) => onChange(e, "sede")}>
        </TextInput>

        <TextInput
          style = {[styles.TextInputs, styles.shadow]} 
          placeholder = "Ingresa Profesor a cargo del Taller"
          onChange = {(e) => onChange(e, "profesor")}>
        </TextInput>

        <TextInput
          style = {[styles.TextInputs, styles.shadow]} 
          placeholder = "Ingresa minutos restantes"
          onChange = {(e) => onChange(e, "minutos")}
          keyboardType = "number-pad">
        </TextInput>

        <TouchableOpacity style = {styles.EnviarNoti} onPress = {handleNotification}>

          <Text style = {styles.textEnviarNoti}>Enviar</Text>

        </TouchableOpacity>

    </View>
  )
}

const defaultNotiValues = () => {
  return {

      curso: '',

      sede: '',

      profesor: '',

      minutos: '',

  }
};

Notification.setNotificationHandler({
  handleNotification: async () => {
    return{
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  button: {
    width: "100%",
    height: 100,
    marginHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },

  TextInputs: {
    backgroundColor: 'white',
    marginTop: 25,
    marginHorizontal: 20,
    fontSize: 20,
    padding: 10,
    borderRadius: 15,
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

  EnviarNoti: {
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

  textEnviarNoti: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },

});

export default Notificaciones;