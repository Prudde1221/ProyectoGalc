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

const HomeAdministrador = ( {navigation: {navigate} } ) =>{

  const { infoUser } = useContext(AuthenticationContext)

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor={'#282928'} />

      <Image source={ require ('../../images/pexels-sevenstorm-juhaszimrus-443383.jpg') } style={ [ styles.background , StyleSheet.absoluteFill ] }/>
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
                  <Text style={styles.textSubTitle}>{ infoUser.PNombreAdministrador + " " + infoUser.PApellidoAdministrador + " " + infoUser.SApellidoAdministrador }</Text>
                  <Text style={styles.SubtituloRut}>{ infoUser.Rut}</Text>

              </View>

          </View>

      </View>

      <View style={[styles.container, { flex: 6 }]}>

          <View style={[styles.containerCentralizador, {flex: 3.5}]}>

              <View style={[styles.shadow, styles.ventanaDeBotonera]}>

                  <View style={[ styles.container, {flexDirection: 'row'}]}>

                  <View style={styles.containerCentralizador}>

                    <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#F7D931'}]} onPress= {() => navigate('CentrosDeportivos', { Pantalla: 'Fechas' })}>

                        <Icon name='history' size={40} color={'#F7D931'} />

                    </TouchableOpacity>

                    <Text>Historial</Text>

                    </View>

                    <View style={styles.containerCentralizador}>

                    <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#2D6BC2'}]} onPress= {() => navigate('AdminProf')}>

                        <Icon name='person-add' size={40}  color={'#2D6BC2'}/>

                    </TouchableOpacity>

                    <Text>Administrar Profesor</Text>

                    </View>

                  </View>

                  <View style={[styles.container,{flexDirection: 'row'}]}>

                    <View style={styles.containerCentralizador}>

                      <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#20A83E'}]} onPress= {() => navigate('CentrosDeportivos', { Pantalla: 'Inventario' })}>

                        <Icon name='inventory' size={40} color={'#20A83E'}/>

                      </TouchableOpacity>

                      <Text>Inventario</Text>

                      </View>

                      <View style={styles.containerCentralizador}>

                        <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#F36A34'}]} onPress= {() => navigate('AdminAlum')}>

                          <Icon name='person-add' size={40} color={'#F36A34'}/>

                        </TouchableOpacity>

                        <Text>Administrar Alumno</Text>

                      </View>

                      <View style={styles.containerCentralizador}>

                        <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2, {borderColor: '#E63642'}]} onPress= {() => navigate('CentrosDeportivos', { Pantalla: 'Curso' })}>

                          <Icon name='groups' size={40} color={'#E63642'}/>

                        </TouchableOpacity>

                        <Text>Curso</Text>

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
      borderWidth:4,
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

export default HomeAdministrador;

/*

        <View style={[styles.container, {flexDirection: 'row', alignItems: 'center'}]}>

            <View style={[styles.container, {}]}>

                <TouchableOpacity style={[styles.botonesSuperiores,  styles.shadow,{ marginLeft: 20 }]} onPress= {() => navigate('Configuracion')}>

                    <Icon name='settings' size={30} color={'white'}/>

                </TouchableOpacity>

            </View>

            <View style={[styles.container, {}]}>
            </View>

            <View style={[styles.container, { alignItems: 'flex-end'}]}>

                <TouchableOpacity style={[styles.botonesSuperiores, styles.shadow, { marginRight: 20 }]} onPress= {() => navigate('Notificaciones')}>

                    <Icon name='notifications' size={30} color={'white'}/>

                </TouchableOpacity>

            </View>
            
        </View>


            
        <View style={[styles.container, {flex: 2, justifyContent: 'center', flexDirection: 'row'}]}>

            <View style={styles.containerCentralizador}>

                <TouchableOpacity style={[ styles.shadow, styles.imagenPerfil]} onPress= {() => navigate('ConfiguracionDePerfil')}>

                </TouchableOpacity>

            </View>

            <View style={[styles.container, { flex: 1.5, justifyContent: 'center'}]}>

                <Text style={styles.SubtituloRut}>Bienvenido</Text>
                <Text style={styles.SubtituloNombre}> Admin</Text>

            </View>

        </View>



        <View style={[styles.container, { flex: 6 }]}>

            

            <View style={[styles.containerCentralizador, {flex: 3.5}]}>

                <View style={[styles.shadow, styles.ventanaDeBotonera]}>

                    <View style={[ styles.container, {flexDirection: 'row'}]}>


                        <View style={styles.containerCentralizador}>

                            <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2]} onPress= {() => navigate('CentrosDeportivos', { Pantalla: 'Fechas' })}>

                                <Icon name='history' size={40} color={'#E63642'} />

                            </TouchableOpacity>

                            <Text>Historial</Text>

                        </View>

                        <View style={styles.containerCentralizador}>

                            <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2]} onPress= {() => navigate('AdminProf')}>

                                <Icon name='person-add' size={40}  color={'#20A83E'}/>

                            </TouchableOpacity>

                            <Text>Administrar Profesor</Text>

                        </View>

                    </View>

                    <View style={[styles.container,{flexDirection: 'row'}]}>

                        <View style={styles.containerCentralizador}>

                            <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2]} onPress= {() => navigate('CentrosDeportivos', { Pantalla: 'Inventario' })}>

                                <Icon name='inventory' size={40} color={'#F7D931'}/>

                            </TouchableOpacity>

                            <Text>Inventario</Text>

                        </View>

                        <View style={styles.containerCentralizador}>

                            <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2]} onPress= {() => navigate('AdminAlum')}>

                                <Icon name='person-add' size={40} color={'#2D6BC2'}/>

                            </TouchableOpacity>

                            <Text>Administrar Alumno</Text>

                        </View>

                        <View style={styles.containerCentralizador}>

                            <TouchableOpacity style={[styles.botonesInferiores, styles.shadow2]} onPress= {() => navigate('CentrosDeportivos', { Pantalla: 'Curso' })}>

                                <Icon name='groups' size={40} color={'#F36A34'}/>

                            </TouchableOpacity>

                            <Text>Curso</Text>

                        </View>



                    </View>

                </View>

            </View>


        </View>

*/