import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Dimensions, SafeAreaView } from 'react-native';
import { Icon } from '@rneui/themed';
import { AuthenticationContext } from '../../Servicios/Authentication/AuthenticationContext';

const ancho = Dimensions.get('window').width
const largo = Dimensions.get('window').height

/*

red= #E63642
verde= #20A83E
amarillo= #F7D931
azul= #2D6BC2
naranjo = #F36A34


*/

function HomeAlumno( { navigation: {navigate} }) {
    
    const { infoUser } = useContext(AuthenticationContext)

    return (

        <SafeAreaView style={styles.container}>

            <Image source={ require ('../../images/pexels-thomas-ronveaux-14317219.jpg') } style={ [ styles.background , StyleSheet.absoluteFill ] }/>
            <View style={ [ styles.opacidadBlanca , StyleSheet.absoluteFill ] }/>

            <StatusBar backgroundColor={'#20A83E'} barStyle='dark-content' />

            <View style={[styles.container, {flexDirection: 'row', alignItems: 'center'}]}>

                <View style={styles.container}>

                    <TouchableOpacity style={[styles.botonesSuperiores,  styles.shadow,]} onPress= {() => navigate('Configuracion')}>

                        <Icon name='settings' size={30} color={'black'}/>

                    </TouchableOpacity>

                </View>
                
            </View>


                
            <View style={[styles.container, {flex: 2, justifyContent: 'center',}]}>


                <View style = {[styles.windowInfoUser, styles.shadow]}>

                    <View style={styles.containerCentralizador}>

                        <Image source={ require ('../../images/Ganemosle-a-la-calle.png') } style={ styles.imagenPerfil }/>
                        
                    </View>

                    <View style={[styles.container, { flex: 1.5, justifyContent: 'center'}]}>

                        <Text style={styles.textTitle}>Bienvenido!!</Text>
                        <Text style={styles.textSubTitle}>{ infoUser.PNombreAlumno + " " + infoUser.PApellidoAlumno + " " + infoUser.SApellidoAlumno }</Text>
                        <Text style={styles.SubtituloRut}>{ infoUser.Rut}</Text>

                    </View>

                </View>

            </View>

            <View style={[styles.container, { flex: 6 }]}>

                <View style={[styles.containerCentralizador, {flex: 3.5}]}>

                    <View style={[styles.shadow, styles.ventanaDeBotonera]}>

                        <View style={[ styles.container, {flexDirection: 'row'}]}>

                            <View style={styles.containerCentralizador}>

                                <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#E63642'}]} onPress= {() => navigate('Talleres', { Pantalla: 'Horario', sede: infoUser.Sede })}>

                                    <Icon name='today' size={40} color={'#E63642'} />

                                </TouchableOpacity>

                                <Text>Horario</Text>

                            </View>

                            <View style={styles.containerCentralizador}>

                                <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#20A83E'}]} onPress= {() => navigate('Historial', {rutAlumno: infoUser.Rut})}>

                                    <Icon name='history' size={40} color={'#20A83E'} />

                                </TouchableOpacity>

                                <Text>Historial</Text>

                            </View>

                        </View>    

                        <View style={[ styles.container, {flexDirection: 'row'}]}>

                            <View style={styles.containerCentralizador}>

                                <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#2D6BC2'}]} onPress= {() => navigate('CursoAlumno', { sede: infoUser.Sede, Curso: infoUser.IDCurso })}>

                                    <Icon name='groups' size={40} color={'#2D6BC2'} />

                                </TouchableOpacity>

                                <Text>Curso</Text>

                            </View>

                            <View style={styles.containerCentralizador}>

                                <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#F7D931'}]} onPress= {() => navigate('ListaProfesores', { Pantalla: 'ListaProfesores' })}>

                                    <Icon name='book' size={40}  color={'#F7D931'} />

                                </TouchableOpacity>

                                <Text>Lista de Profesores</Text>

                            </View>

                        </View>

                    </View>

                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1
      },
  
      background:{
          width: ancho,
          height: largo,
          resizeMode:'cover',
      },
  
      opacidadBlanca:{
          width: ancho,
          height: largo,
          backgroundColor: 'rgba(255,255,255,0.85)'
      },
  
      topView:{
          alignSelf: 'center',
          width: '100%',
          height: '30%',
          overflow: 'hidden',
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
          backgroundColor:'white'
      },
  
      settings:{
          alignSelf: 'flex-start',
          marginTop: 20,
          marginLeft: 15
      },
  
      containerInfoUser:{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center'
      },
  
      logo:{
          marginLeft: 15,
          width: 130,
          height: 87,
          resizeMode:'contain',
      }, 
  
      textInfoUser:{
          width: '55%'
      },
  
      textTitle:{
          fontSize: 30,
          fontWeight: 'bold'
      },
  
      textSubTitle:{
          marginTop: 15,
          fontSize: 25,
          fontWeight: '500'
      },
  
      windowInfoUser:{
          alignSelf: 'center',
          width: '90%',
          height: '90%',
          backgroundColor: 'rgba(255,255,255,1)',
          borderRadius: 15,
          justifyContent: 'center',
          flexDirection: 'row'
      },
  
  
  
  
  
  
  
  
      containerCentralizador: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
      },
  
  
      botonesSuperiores:{
          backgroundColor: 'white',
          width: 50,
          height: 50,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20
      },
  
      botonesInferiores:{
          width: 80,
          height: 80,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          overflow: 'hidden'
      },
  
      SubtituloNombre:{
          fontSize: 35,
          fontWeight: 'bold',
          fontVariant: ['small-caps'],
          color: '#282928',
      },
  
      SubtituloRut: {
          fontStyle: 'italic',
          fontSize: 20,
          color: '#282928'
      },
  
      shadow2: {
          borderWidth:3,
          borderColor: '#E63642'
      },
  
      shadow: {
          borderColor: '#d9d9d9',
          borderBottomWidth: 2.5,
          borderRightWidth: 1.5,
          borderLeftWidth: 0.5
      },
  
      imagenPerfil: {
          width: 110,
          height: 80,
          marginLeft: 20,
  
      },
  
      ventanaDeBotonera: {
          width: 350,
          height: 250,
          backgroundColor: 'rgba(255,255,255,1)',
          borderRadius: 15
      },
  
      botonTablonDeAnuncio: {
          width: '70%',
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E63642',
          borderRadius: 15,
          marginBottom: 20
      },
  
      textAnuncios: {
          fontSize: 25,
          color: 'white'
      },

});

export default HomeAlumno;

/*

            <View style={[styles.container, {flexDirection: 'row', alignItems: 'center'}]}>

                <View style={[styles.container, {}]}>

                    <TouchableOpacity style={[styles.botonesSuperiores, { marginLeft: 20 }]} onPress= {() => navigate('Configuracion')}>

                        <Icon name='settings' size={30}/>

                    </TouchableOpacity>

                </View>

                <View style={[styles.container, {}]}>
                </View>

                <View style={[styles.container, { alignItems: 'flex-end'}]}>

                    <TouchableOpacity style={[styles.botonesSuperiores, { marginRight: 20 }]} onPress= {() => navigate('Notificaciones')}>

                        <Icon name='notifications' size={30} />

                    </TouchableOpacity>

                </View>
                
            </View>


                
            <View style={[styles.container, {flex: 2, justifyContent: 'center', flexDirection: 'row'}]}>

                <View style={styles.containerCentralizador}>

                    <TouchableOpacity style={[ styles.shadow, styles.imagenPerfil]} onPress= {() => navigate('ConfiguracionDePerfil')}>

                    </TouchableOpacity>

                </View>

                <View style={[styles.container, { flex: 1.5, justifyContent: 'center'}]}>

                    <Text style={styles.SubtituloRut}>Rut</Text>
                    <Text style={styles.SubtituloNombre}>Nombre Alumno</Text>

                </View>

            </View>



            <View style={[styles.container, { flex: 6 }]}>

                

                <View style={[styles.containerCentralizador, {flex: 3.5}]}>

                    <View style={[styles.shadow, styles.ventanaDeBotonera]}>

                        <View style={[ styles.container, {flexDirection: 'row'}]}>

                            <View style={styles.containerCentralizador}>

                                <TouchableOpacity style={[styles.botonesInferiores, styles.shadow]} onPress= {() => navigate('Talleres', { Pantalla: 'Horario', sede: sedeAlumno })}>

                                    <Icon name='today' size={40}  />

                                </TouchableOpacity>

                                <Text>Horario</Text>

                            </View>

                            <View style={styles.containerCentralizador}>

                                <TouchableOpacity style={[styles.botonesInferiores, styles.shadow]} onPress= {() => navigate('Talleres', { Pantalla: 'Fechas', sede: sedeAlumno })}>

                                    <Icon name='history' size={40} />

                                </TouchableOpacity>

                                <Text>Historial</Text>

                            </View>

                        </View>    

                        <View style={[ styles.container, {flexDirection: 'row'}]}>

                            <View style={styles.containerCentralizador}>

                                <TouchableOpacity style={[styles.botonesInferiores, styles.shadow]} onPress= {() => navigate('Talleres', { Pantalla: 'Curso', sede: sedeAlumno })}>

                                    <Icon name='groups' size={40} />

                                </TouchableOpacity>

                                <Text>Curso</Text>

                            </View>

                            <View style={styles.containerCentralizador}>

                                <TouchableOpacity style={[styles.botonesInferiores, styles.shadow]} onPress= {() => navigate('ListaProfesores', { Pantalla: 'ListaProfesores' })}>

                                    <Icon name='book' size={40}  />

                                </TouchableOpacity>

                                <Text>Lista de Profesores</Text>

                            </View>

                        </View>

                    </View>

                </View>


            </View>

*/