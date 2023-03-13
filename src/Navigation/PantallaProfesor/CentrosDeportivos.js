import React from "react";
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from "react-native";

function CentrosDeportivos( {navigation: {navigate}, route }) {

    function NavegarALaFuncion( sedeSeleccionada, PantallaSeleccionada ) {

        if( `${route.params.Pantalla}` == `Horario` ){

            navigate('Talleres', { sede: sedeSeleccionada, Pantalla: PantallaSeleccionada  } )
            
        }
        if( `${route.params.Pantalla}` == `ListaDeAsistencia` ){

            navigate('Talleres', { sede: sedeSeleccionada, Pantalla: PantallaSeleccionada  } )

        }

        if( `${route.params.Pantalla}` == `Fechas` ){

            navigate('Talleres', { sede: sedeSeleccionada, Pantalla: PantallaSeleccionada  } )

        }
        
        if( `${route.params.Pantalla}` == `Inventario` ){
            
            navigate(`Inventario`, { name: sedeSeleccionada } )

        }

        if( `${route.params.Pantalla}` == `Curso` ){

            navigate(`Talleres`, { sede: sedeSeleccionada, Pantalla: PantallaSeleccionada } )

        }

    }


    return (
        <SafeAreaView style={styles.container}>

            <StatusBar backgroundColor={'#E63642'}/>

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={ () => NavegarALaFuncion( "Centro La Ermita", route.params.Pantalla )}>

                    <Text style={styles.textCentro}>La Ermita</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Centro La Virgen", route.params.Pantalla ) }>

                    <Text style={styles.textCentro}>La Virgen</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Centro Los Cisnes", route.params.Pantalla ) }>

                    <Text style={styles.textCentro}>Los Cisnes</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Centro Newen", route.params.Pantalla ) }>

                    <Text style={styles.textCentro}>Newen</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Centro Patricio Mekis", route.params.Pantalla ) }>

                    <Text style={styles.textCentro}>Patricio Mekis</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Centro Quillota", route.params.Pantalla ) }>

                    <Text style={styles.textCentro}>Quillota</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Centro Recoleta", route.params.Pantalla ) }>

                    <Text style={styles.textCentro}>Recoleta</Text>

                </TouchableOpacity>

                <TouchableOpacity style={[styles.botones, styles.shadow]} onPress={() => NavegarALaFuncion( "Centro Villa Portales", route.params.Pantalla ) }>

                    <Text style={styles.textCentro}>Villa Portales</Text>

                </TouchableOpacity>

            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
    },

    botones:{
        width: '80%',
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        borderRadius: 15,
        backgroundColor: 'white'
    },

    shadow: {
        borderColor: '#EBEBEB',
        borderBottomWidth: 2,
        borderRightWidth: 2.5,
        borderLeftWidth: 0.5
    },
    
    textCentro:{
        fontSize: 28,
        fontWeight: '170',
        alignSelf: 'center',
    },

});

export default CentrosDeportivos;
