import React, {useContext} from "react";
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Dimensions, StatusBar, Alert } from "react-native";
import { Icon } from '@rneui/themed';
import { AuthenticationContext } from '../../Servicios/Authentication/AuthenticationContext';

const ancho = Dimensions.get('window').width
const largo = Dimensions.get('window').height

const AdminConfig = ({navigation: {navigate} }) =>{

  const { infoUser, onLogOut, emailResetPassword, errorResetPassword } = useContext(AuthenticationContext)

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor={'#F36A34'} barStyle='dark-content' />

      <View style={ [ styles.opacidadBlanca , StyleSheet.absoluteFill ] }/>

      <View style={styles.infoUser}>

        <Text style={styles.textTitle}>{ infoUser.PNombreAdministrador + " " + infoUser.SNombreAdministrador + " " +  infoUser.PApellidoAdministrador + " " + infoUser.SApellidoAdministrador }</Text>
        <Text style={styles.textSubTitle}>Rut: { infoUser.Rut}</Text>
        <Text style={styles.textSubTitle}>Dirección de correo: { infoUser.Correo}</Text>
        <Text style={[styles.textSubTitle,{marginBottom: 20}]}>Telefono: { infoUser.NumeroTelProfesor}</Text>

      </View>

      <TouchableOpacity style={styles.button} onPress={ () => navigate("Cambiar Email")}>

        <Icon name='email' size={ 35 } style={styles.icon} color='#20A83E'/>
        <Text style={styles.textButton} >Cambiar dirección de correo</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => {emailResetPassword(infoUser.Correo), Alert.alert( "Restablecer contraseña" ,"Te hemos enviado un correo electrónico. Solo tienes que seguir las instrucciones para restablecer tu contraseña.")}}>

        <Icon name='https' size={ 35 } style={styles.icon} color='#2D6BC2'/>
        <Text style={styles.textButton} >Cambiar contraseña</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => navigate("Cambiar Numero Telefono")}>

        <Icon type={'material-community'} name='cellphone-information' size={ 35 } style={styles.icon} color='#F7D931'/>
        <Text style={styles.textButton} >Cambiar numero de telefono</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={ () => onLogOut()} >

        <Icon name='logout' size={ 35 } style={styles.icon} color='red' />
        <Text style={styles.textButton} >Cerrar sesión</Text>

      </TouchableOpacity>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button:{
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5
  },

  textButton:{
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 25,
  },

  textTitle:{
    marginTop: 15,
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 15
  },

  textSubTitle:{
    marginTop: 5,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 15
  },

  opacidadBlanca:{
    width: ancho,
    height: largo,
    backgroundColor: 'white' 
  },

  infoUser:{
    width: '100%',
    borderBottomWidth: 0.8,
  },

  icon:{
    marginLeft: 20
  },

  error:{
    color: 'red',
    marginTop: 10,
    fontWeight: '600',
    marginHorizontal: 15,
    fontSize: 15,
    alignSelf: 'center'
  },
});

export default AdminConfig;