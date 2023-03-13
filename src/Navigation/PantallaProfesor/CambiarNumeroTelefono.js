import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { Icon } from '@rneui/themed';
import { AuthenticationContext } from '../../Servicios/Authentication/AuthenticationContext';
import { Button } from 'react-native-paper';

const ancho = Dimensions.get('window').width
const largo = Dimensions.get('window').height


/* Background Author: Sami Abdullah, download with pexels.com */

const CambiarNumeroTelefono = ({navigation: {navigate}}) =>  {

    const [numberPhone, setnumberPhone] = useState("");
    const { errorphone, isLoading, numberPhoneReset } = useContext(AuthenticationContext)
    
    return (
        <SafeAreaView style={ styles.containerCentralizador }>

            <StatusBar backgroundColor={'#F7D931'}/>

            <Image source={ require ('../../images/pexels-sami-abdullah-11906342.jpg') } style={ [ styles.background , StyleSheet.absoluteFill ] }/>

            <View style={ styles.container }>

            <ScrollView style={ styles.opacidadBlanca }>

                <Image source={ require ( '../../images/LogoGALCBlack.png' ) } style={ styles.logo }/>

                <View style={styles.containerText} >

                    <Text style={styles.title} >Restablecer Numero Telefónico</Text>
                    <Text style={styles.subTitle}>Introduce el nuevo numero telefónico.</Text>

                </View>

                <View style={ styles.containerTextInput }>
                    
                    <Icon name='cellphone-information' size={30} type={'material-community'}/>
                    <TextInput 
                        placeholder='ejemplo: +56 9 1234 5678' 
                        style={styles.textInput}
                        keyboardType = "email-address"
                        onChangeText={(value) => setnumberPhone(value)}
                    />

                </View>

                <Text style={ styles.error }> {errorphone} </Text>

                <Button
                    icon={'email-send'}
                    mode='contained'
                    buttonColor='#F7D931'
                    loading={isLoading}
                    contentStyle={styles.buttonInner}
                    style={styles.button}
                    labelStyle={styles.textEnviar}
                    onPress={() => {numberPhoneReset(numberPhone)}}
                >
                    Enviar
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
        marginTop: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'black',
    },

    containerText: {
        width: '90%',
        alignSelf:'center',
        alignItems: 'center',
        marginTop: 40,
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
        width: 130,
        height: 60,
    },

    button:{
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 30,
    },

    textEnviar:{
        fontSize: 20,
        color:'white',
        fontWeight: 'bold'
    },

    title:{
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },

    subTitle:{
        marginTop: 15,
        alignSelf: 'center',
        fontSize: 19,
        fontWeight: '500'
    },

    error:{
        color: 'red',
        marginTop: 10,
        fontWeight: '600',
        marginHorizontal: 15,
        fontSize: 15
    },
});

export default CambiarNumeroTelefono;