import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, StatusBar } from "react-native";
import { db } from "../../../database/firebase";
import { collection, getDocs } from "firebase/firestore";

function Fechas({ navigation: { navigate }, route }) {

  const [fechas, setfechas] = useState();
  const sede = route.params.sede
  const deporte = route.params.deporte

  async function cargarFechas() {
    try {

      const lista = []
      const fechasRef = collection(db, `/Asistencia/${sede}/Cursos/${deporte}/Fechas`)
      const querySnapshot = await getDocs(fechasRef)
      querySnapshot.forEach((doc) => {
        lista.push(doc.data())
      });
      setfechas(lista)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    cargarFechas()
  }, []);

  function renderItem({ item }) {

    return (

      <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => navigate('HistorialDeAsistencia', { sede: sede, deporte: deporte, fecha: item.id })}>

        <Text style={styles.textCentro}>{item.dia} / {item.mes} / {item.año}</Text>

      </TouchableOpacity>

    )

  }

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor={'#F7D931'}/>

      <FlatList
        data={ fechas }
        renderItem={ renderItem }
        keyExtractor={ item => item.id }
      />

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
    alignItems: 'center',
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
  },

});

export default Fechas;