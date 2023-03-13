import React, {useState, useEffect} from "react";
import { SafeAreaView, StatusBar, StyleSheet, FlatList, TouchableOpacity, Text, View } from "react-native";
import { db } from "../../../database/firebase";
import { collection, getDocs, query, where} from "firebase/firestore";

const Curso = ({navigation: {navigate}, route}) =>{

  const [students, setstudents] = useState();

  async function LoadStudents(){

    try{
        
      const refUsuarios = query(collection( db, `Usuarios` ));
      const students = query(refUsuarios, where("IDCurso", "array-contains", route.params.idcurso));
      const querySnapshot = await getDocs(students)
      setstudents(querySnapshot.docs)
        
    }

    catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    LoadStudents()
  }, []);

  function ShowStudents({item}) {

    //PENDIENTE APRETARLE A ALUMNO MUESTRA MODAL CON TODOS SUS DATOS

    return(
      <TouchableOpacity style={[styles.cardstudents, styles.shadow]}>

        <Text style={styles.namestudents}>{item.data().PNombreAlumno} {item.data().PApellidoAlumno} {item.data().SApellidoAlumno}</Text>
        <Text style={styles.rutstudents}>{item.data().Rut}</Text>

      </TouchableOpacity>
    )
    
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor={'#E63642'}/>
      <FlatList
        data={ students }
        renderItem = {ShowStudents}
        keyExtractor = {item => item.id}
      />
      <View style={{height: 30}}></View>

    </SafeAreaView>
  );
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

export default Curso;