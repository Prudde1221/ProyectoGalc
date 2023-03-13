import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, FlatList, Switch, TouchableOpacity} from 'react-native';
import { db } from "../../../database/firebase";
import { collection, doc,setDoc, getDocs, query, where, getDoc, updateDoc } from "firebase/firestore";
import Toast from "react-native-root-toast";

const date = new Date().getDate()
const month = new Date().getMonth() +1
const year = new Date().getFullYear()
const nameDoc = `${date}${month}${year}`

const ListaDeAsistencia = ({navigation: {navigate}, route}) => {

  const [students, setstudents] = useState();
  const sede = route.params.sede
  const deporte = route.params.deporte
  const idDeporte = route.params.idcurso

  async function QueryDate(){

    try{

      const refDate = doc(db, `Asistencia/${sede}/Cursos/${deporte}/Fechas/${nameDoc}`)
      const QueryDate = await getDoc(refDate)

      if(!QueryDate.exists()){

        await setDoc(doc(db, `Asistencia/${sede}/Cursos/${deporte}/Fechas`, `${nameDoc}`), {
          id: `${nameDoc}`,
          dia: `${date}`,
          mes: `${month}`,
          año: `${year}`
        });

        const refUsuarios = query(collection( db, `Usuarios` ));
        const queryStudents = query(refUsuarios, where("IDCurso", "array-contains", idDeporte));
        const querySnapshot = await getDocs(queryStudents)

        querySnapshot.forEach((doc) => {
          AddStudent( doc.data().PNombreAlumno, doc.data().SNombreAlumno, doc.data().PApellidoAlumno, doc.data().SApellidoAlumno, doc.data().Rut  )
        });

        const lista = []
        const refDateInSport = query(collection(db, `/Asistencia/${sede}/Cursos/${deporte}/Fechas/${nameDoc}/Alumnos` ));
        const studentsInSport = await getDocs(refDateInSport)

        studentsInSport.forEach((doc) => {
          lista.push(doc.data())
        });
        setstudents(lista)

      }

      if(QueryDate.exists()){

        //Listo
        const lista = []
        const refDateInSport = query(collection(db, `/Asistencia/${sede}/Cursos/${deporte}/Fechas/${nameDoc}/Alumnos` ));
        const studentsInSport = await getDocs(refDateInSport)

        studentsInSport.forEach((doc) => {
          lista.push(doc.data())
        });
        setstudents(lista)

      }
    }
    
    catch (error){
      console.log(error)
    }
  }

  async function AddStudent( Pnombre, Snombre, Papellido, Sappelido, Rut){

    try{

      await setDoc(doc(db, `Asistencia/${sede}/Cursos/${deporte}/Fechas/${nameDoc}`, "Alumnos", `${Rut}`), {
        PNombreAlumno: `${Pnombre}`,
        SNombreAlumno: `${Snombre}`,
        PApellidoAlumno: `${Papellido}`,
        SApellidoAlumno: `${Sappelido}`,
        Rut: `${Rut}`,
        Estado: false,
        dia: `${date}`,
        mes: `${month}`,
        año: `${year}`
      });

    }
    
    catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    QueryDate();
  }, []);

  async function updateCondition( Rut, value ){

    try{

      await updateDoc(doc(db, `Asistencia/${sede}/Cursos/${deporte}/Fechas/${nameDoc}`, "Alumnos", `${Rut}`), {
        Estado: value,
      });

    }
    
    catch (error){
      console.log(error)
    }
  }

  const sendAttendance = () => { students.forEach(student => updateCondition(student.Rut, student.Estado)); }
  const onUpdateValue = (index, value) => { students[index].Estado = value; return setstudents([...students]); }
  const renderItem = ({item, index})=><ItemRenderer selected={item.Estado} index={index} nameStudent={`${item.PNombreAlumno} ${item.PApellidoAlumno} ${item.SApellidoAlumno}`} rutStudent={item.Rut} onUpdateValue={onUpdateValue} />

  return(

    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor={'#20A83E'}/>

      <FlatList 
        data={ students }
        renderItem={renderItem}
        keyExtractor={item => item.Rut}
      />

      <TouchableOpacity style={styles.continuar} onPress={() => {sendAttendance(); navigate('Home Profesor'), Toast.show("Asistencia enviada", {duration: 720, position: Toast.positions.BOTTOM, shadow: true, animation: true, delay: 0}) }}>

        <Text style={styles.textContinuar}>Enviar</Text>

      </TouchableOpacity>

    </SafeAreaView>

  )

};

const ItemRenderer = ({index, nameStudent,rutStudent, selected, onUpdateValue })=>
  <View style={[styles.item, styles.shadow]}>
    <View>
      <Text style={styles.name}>{nameStudent}</Text>
      <Text style={styles.rutstudents}>{rutStudent}</Text>
    </View>
    <Switch
      value={selected}
      trackColor={{ false: '#767577', true: '#50A41C' }}
      thumbColor={ selected ? '#6FE426' : '#f4f3f4' }
      onValueChange={(value) => onUpdateValue(index, value)}/>
  </View>




const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  item: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
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

  name:{
    fontSize: 20,
    textTransform: 'capitalize'
  },

  rutstudents:{
    fontSize: 20,
    fontStyle: 'italic',
  },

  continuar: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#20A83E',
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

export default ListaDeAsistencia;