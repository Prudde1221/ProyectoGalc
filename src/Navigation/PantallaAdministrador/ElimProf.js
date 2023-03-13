import React, {useEffect, useState}  from "react";
import { TextInput, Text, StyleSheet, View, TouchableOpacity, FlatList, SafeAreaView,StatusBar} from "react-native";
import { doc, getDocs,setDoc,deleteDoc, snapshotEqual,updateDoc,collection, where, query } from 'firebase/firestore';
import { db } from "../../../database/firebase";
import { Icon } from '@rneui/themed';

function ElimProfe({ navigation: {navigate}, route }) {
    const [userDoc, setUserDoc] = useState(null)

   async function loadData(){
        try {
            const userref = collection(db,'Usuarios');
            const adminref = query(userref, where("Cargo", "==","Profesor"));
            const querySnapshot = await getDocs(adminref)//obtengo la data
            setUserDoc(querySnapshot.docs)
        } catch (error) {
            console.log(error)
        }
    }

    loadData()


   async function borrarprof(user){

    await deleteDoc(doc(db, `Usuarios/${user}`), {
      });
    
   }
   function renderItem ({item}){
    return(
        
        <View style={{  flexDirection:'row', marginBottom: 20 }}>
            <StatusBar backgroundColor={'#2D6BC2'} barStyle='dark-content' />
            <View style={{backgroundColor:`#2D6BC2`, width:'70%', borderRadius: 10, marginHorizontal: 5 }}>
                
                <Text style = {styles.casilla}> {item.data().PNombreProfesor} {item.data().PApellidoProfesor}</Text>
                
            </View>   
           <View style={{ }}>
                <View style={{  flexDirection:'row'}}>
                    <TouchableOpacity
                        style = {styles.botones}
                        onPress={() => borrarprof( item.id)}>
                        <Text style = {styles.textbtn}><Icon name='delete' /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
   
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.Windowtouchable}>
                <FlatList 
                    data={ userDoc}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    
                />
            </SafeAreaView>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      casilla:{
          fontWeight: 'bold',
          padding:15,
          color: 'white'
          
      },
      TextInputs: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        fontSize: 20,
        padding: 10,
        borderRadius: 15,
        width: '70%'
      },
    
      shadow: {
        borderColor: '#EBEBEB',
        borderBottomWidth: 2,
        borderRightWidth: 2.5,
        borderLeftWidth: 0.5
      },
    
      Windowtouchable:{
          flex: 1,
          alignSelf: 'center',
          width: '90%',
          marginTop: 40,
          marginBottom: '80%',
      },
      botones:{
          backgroundColor:'rgba(80, 75, 74, .1)',
          width:'40%', 
          paddingLeft:20,
          padding:11,
          borderRadius: 10,
          marginHorizontal: 5,
      },
      textbtn:{
          fontWeight:'bold',
          fontSize: 20
      }
  });

export default ElimProfe;