import React, {useEffect, useState}  from "react";
import { TextInput, Text, StyleSheet, View, TouchableOpacity, FlatList, SafeAreaView, StatusBar} from "react-native";
import { doc, getDocs, snapshotEqual,updateDoc,collection } from 'firebase/firestore';
import {  db } from "../../../database/firebase";
import { async } from "@firebase/util";

function Inventario({ navigation: {navigate}, route }) {
    const sede = route.params.name
    const [userDoc, setUserDoc] = useState(null)
    //const myDoc = doc (db, `Asistencia/${sede}/Inventario/InventarioDoc`)
    //getDoc(myDoc)
    
   async function loadData(){
        try {
            
            const querySnapshot = await getDocs(collection(db, `Asistencia/${sede}/Inventario`));
            setUserDoc(querySnapshot.docs)
        } catch (error) {
            console.log(error)
        }
    }

    loadData()

   async function actualizarinv(sede, op, cant,articulo){
    if (op == 's'){
        cant= cant + 1
        await updateDoc(doc(db, `Asistencia/${sede}/Inventario/${articulo}`), {
            numero : cant,
          });
    }
    if (op == 'r'){
        cant= cant - 1
        await updateDoc(doc(db, `Asistencia/${sede}/Inventario/${articulo}`), {
            numero: cant,
          });
    }
   }

   function renderItem ({item}){
        return(
            
            <View style={{  flexDirection:'row', marginBottom: 20 }}>

                <StatusBar backgroundColor={'#2D6BC2'} barStyle='dark-content' />

                <View style={{backgroundColor:`#2D6BC2`, width:'60%', borderRadius: 10, marginHorizontal: 5 }}>
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
    Windowtouchable:{
        flex: 1,
        alignSelf: 'center',
        width: '90%',
        marginTop: 40,
        marginBottom: 20,
    },
    botones:{
        backgroundColor:'rgba(80, 75, 74, .1)',
        width:'25%', 
        paddingLeft:20,
        padding:11,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    textbtn:{
        fontWeight:'bold',
        fontSize: 20
    },
    containerTouchables:{
        marginVertical: 10,
        width: '100%',
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        justifyContent: 'flex-end',
    }
});

export default Inventario;
