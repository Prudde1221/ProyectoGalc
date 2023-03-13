import React, {useEffect, useState}  from "react";
import { TextInput, Text, StyleSheet, View, TouchableOpacity, FlatList, SafeAreaView, StatusBar} from "react-native";
import { doc, getDocs,deleteDoc,setDoc, snapshotEqual,updateDoc,collection } from 'firebase/firestore';
import { db } from "../../../database/firebase";
import { Icon } from '@rneui/themed';

function Inventario({ navigation: {navigate}, route }) {
    const sede = route.params.name
    const [userDoc, setUserDoc] = useState(null)
    const [FormularioData, setFormularioData] = useState(defaultFormularioValues())

    const onChange = (e, type) => {
        setFormularioData({ ...FormularioData, [type]: e.nativeEvent.text })
  
    }
    

   async function loadData(){
        try {
            
            const querySnapshot = await getDocs(collection(db, `Asistencia/${sede}/Inventario`));
            setUserDoc(querySnapshot.docs)
        } catch (error) {
            console.log(error)
        }
    }

    loadData()

    async function ingresarItem () {

        await setDoc(doc(db, `Asistencia/${sede}/Inventario/${FormularioData.Item}`), {
    
          numero: 0,
        });
    
    
      }

   async function actualizarinv(sede, op, cant,articulo){
    if (op == 's'){
        cant= cant + 1
        await updateDoc(doc(db, `Asistencia/${sede}/Inventario/${articulo}`), {
            numero : cant,
          });
    }
    if (op == 'r'){
        cant= cant - 1
        if(cant>=0){
            await updateDoc(doc(db, `Asistencia/${sede}/Inventario/${articulo}`), {
                numero: cant,
              });
        }
        
    }
    if (op == 'b'){
        await deleteDoc(doc(db, `Asistencia/${sede}/Inventario/${articulo}`), {
            
          });
    }
   }
   function renderItem ({item}){
    return(
        
        <View style={{  flexDirection:'row', marginBottom: 20 }}>
            
            

            <View style={{backgroundColor:`#20A83E`, width:'49%', borderRadius: 10, marginHorizontal: 5 }}>
                    <Text style = {styles.casilla}>{item.id} = {item.data().numero}</Text>
            </View>   
            <View style={{ }}>
                <View style={{  flexDirection:'row'}}>
                    <TouchableOpacity
                        style = {styles.botones}
                        onPress={() => actualizarinv(route.params.name,'s', item.data().numero, item.id)}>
                        <Text style = {styles.textbtn}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.botones}
                        onPress={() => actualizarinv(route.params.name,'r', item.data().numero, item.id)}>
                        <Text style = {styles.textbtn}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.botones}
                        onPress={() => actualizarinv(route.params.name,'b', item.data().numero, item.id)}>
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

                <StatusBar backgroundColor={'#20A83E'} />
                
                <FlatList 
                    data={ userDoc}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    
                />
                
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style = {[styles.TextInputs, styles.shadow]} 
                        placeholder = "Agregar Articulo"
                        onChange = {(e) => onChange(e, "Item")}>
                    </TextInput>
                    <TouchableOpacity style = {[styles.botones]}onPress={() => { ingresarItem()}}>

                        <Text style = {styles.textbtn}> {'>'} </Text>

                    </TouchableOpacity>
                </View>
                 
            </SafeAreaView>
           
        </View>
    )
}

const defaultFormularioValues = () => {
    return {

        Item: "",

    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
          marginBottom: '30%',
      },
      botones:{
          backgroundColor:'rgba(80, 75, 74, .1)',
          width:'20%', 
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

export default Inventario;