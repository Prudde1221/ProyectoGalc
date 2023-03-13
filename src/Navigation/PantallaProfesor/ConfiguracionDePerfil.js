import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

const ConfiguracionDePerfil = () =>{
    return (
        <View style={styles.container}>
            <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'red'}}>
                Configuraciones De Perfil
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center'
    },
});

export default ConfiguracionDePerfil;