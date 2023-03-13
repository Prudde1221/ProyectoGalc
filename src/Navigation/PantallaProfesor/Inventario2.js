import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableNativeFeedback, Alert, ScrollView } from 'react-native';


function Inventario2({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <Image source = {require('../../images/Grass.jpg')} style = {[{width: '100%', height: '100%', resizeMode: 'cover'}, StyleSheet.absoluteFill]} />
      <View style = {styles.Containerbarracoloresfundacion}>
        <View style={{ flex: 1, backgroundColor: '#3887f4'}}/>
        <View style={{ flex: 1, backgroundColor: '#f4db30'}}/>
        <View style={{ flex: 1, backgroundColor: '#3fc766'}}/>
        <View style={{ flex: 1, backgroundColor: '#ea3e36'}}/>
        <View style={{ flex: 1, backgroundColor: '#f36a34'}}/>
      </View>
      <View style = {styles.topbar}>
        <Text style ={{fontSize:20, fontWeight:'bold'}}>Sedes</Text>
      </View>
     
      <View style = {styles.optionmenu}>
      <TouchableNativeFeedback onPress={() => navigate('Inventario2',{name:['Recoleta']})}>
        <View style = {styles.option}>
          <Text style = {{fontWeight: 'bold',color:'white'}}>Centro Recoleta</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigate('Inventario2',{name:['Newen']})}>
        <View style = {styles.option}>
          <Text style = {{fontWeight: 'bold',color:'white'}}>Centro Newen</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topbar: {  height: '10%', width: '100%', backgroundColor: 'lightgray', borderWidth: 2, borderColor: '#000', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  baroption: { marginVertical: '5%', marginHorizontal: '5%', height: 80, width: 80, borderWidth: 3, borderRadius: 50, borderColor: 'white', alignItems: 'center', justifyContent: 'center'},
  announcementtab: {flex:3, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'},
  announcementtitle: { flex: 1, marginTop: '5%', width: '90%', height: '90%', borderWidth: 2, borderColor: '#000', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' },
  announcementcontent: { flex: 4, width: '90%', height: '90%', borderWidth: 2, borderColor: '#000', backgroundColor: 'lightgray'},
  announcementseparator: { flex: 1, width: '100%', height: '30%', borderBottomWidth: 2, borderBottomColor: '#000' },
  optionmenu: {flex:3, flexDirection: 'row', justifyContent: 'space-between' ,justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'},
  option: { marginVertical: '5%', marginHorizontal: '5%', height: 80, width: 80, borderWidth: 3, borderRadius: 50, borderColor: 'white', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)'},
  containerimage : { flex: 1, flexDirection:'row', alignItems: 'center', justifyContent:'center' },
  containeringresousuario: { flex:2, backgroundColor:'#f1f1f1'},
  Containerbarracoloresfundacion: { flexDirection: 'row', height: 10 },
  image:{ height:'60%',width: '60%',resizeMode:'contain' },
  logo: { flex: 1.5, backgroundColor: 'rgba(0, 0, 0, 0.5)'},
});

export default Inventario2;