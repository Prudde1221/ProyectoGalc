import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import { AuthenticationContext } from '../../Servicios/Authentication/AuthenticationContext';
import { Button } from 'react-native-paper';

const ancho = Dimensions.get('window').width
const largo = Dimensions.get('window').height


/* Background Author: Sami Abdullah, download with pexels.com */

const InicioDeSesion = ({navigation: {navigate}}) =>  {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext)
    
    return (
        <SafeAreaView style={ styles.containerCentralizador }>

            <StatusBar backgroundColor={'#20A83E'}/>

            <Image source={ require ('../../images/pexels-sami-abdullah-11906342.jpg') } style={ [ styles.background , StyleSheet.absoluteFill ] }/>

            <View style={ styles.container }>

                <ScrollView style={ styles.opacidadBlanca }>

                    <Image source={ require ( '../../images/LogoGALCBlack.png' ) } style={ styles.logo }/>

                    <View style={ styles.containerTextInput }>
                        <Icon name='email' size={30}/>
                        <TextInput 
                            placeholder='Dirección de correo' 
                            style={styles.textInput}
                            keyboardType = "email-address"
                            onChangeText={(value) => setemail(value)}
                        />

                    </View>

                    <View style={ styles.containerTextInput }>
                        
                        <Icon name='https' size={ 30 } />
                        <TextInput 
                            placeholder='Contraseña' 
                            style={styles.textInput}
                            secureTextEntry 
                            onChangeText={(value) => setpassword(value)}
                        />

                    </View>

                    <Text style={ styles.error }> {error} </Text>
                    <Text style={ styles.textOlvidasteContraseña } onPress={ () => { navigate("Recuperacion De Cuenta") } } >
                        ¿Olvidaste o se bloqueó tu contraseña?
                    </Text>

                    <Button
                        mode='contained'
                        buttonColor='#20A83E'
                        icon={'login'}
                        contentStyle={styles.buttonInner}
                        style={styles.button}
                        labelStyle={styles.textIngresar}
                        loading={isLoading}
                        onPress={() => onLogin(email, password)}
                    >
                        Iniciar Sesión
                    </Button>

                </ScrollView>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    containerCentralizador: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTextInput: {
        width: '80%',
        height: 60,
        alignSelf:'center',
        alignItems: 'center',
        marginTop: 50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'black',
    },

    background:{
        width: ancho,
        height: largo,
        resizeMode:'cover'
    },

    opacidadBlanca:{
        backgroundColor: 'rgba(255,255,255,0.75)'
    },

    logo:{
        width: ancho,
        height: 100,
        resizeMode:'contain',
        marginTop: 50
    },

    textInput: {
        width: '90%',
        height: "100%",
        paddingLeft: 15,
        fontSize: 20,
    },

    buttonInner:{
        flexDirection: 'row-reverse',
        alignSelf: 'center',
        justifyContent:'center',
        width: '100%',
        height: '100%',
    },

    button:{
        alignSelf: 'center',
        marginTop: 25,
        width: '60%',
        height: 55,
    },



    shadow: {
        borderColor: '#f1f1f1',
        borderBottomWidth: 2.5,
        borderRightWidth: 2.5,
        borderLeftWidth: 0.5
    },

    textOlvidasteContraseña:{
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },

    textIngresar:{
        fontSize: 20,
        color:'white',
        fontWeight: 'bold'
    },

    error:{
        alignSelf: 'center',
        color: 'red',
        marginTop: 10,
        fontWeight: '600',
        marginHorizontal: 15,
        fontSize: 15
    },
});

export default InicioDeSesion;