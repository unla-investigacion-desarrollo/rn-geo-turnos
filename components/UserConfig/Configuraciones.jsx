import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity, Button}  from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserCircle, faMapMarkerAlt, faStore, faCalendar } from "@fortawesome/free-solid-svg-icons";


export default function Configuraciones(props) {

    const navigateConfiguraciones = (opcion) => {
        
        props.navigation.navigate(opcion);
      };

      


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigateConfiguraciones("Datos personales")
                }
            >
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faUserCircle} style={styles.icon} />
                    <Text style={styles.textButton}> Datos personales </Text>
                </View>
                              
                
                
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigateConfiguraciones("Ubicación")
                }
            >
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
                    <Text style={styles.textButton}> Ubicación </Text>
                </View>
            </TouchableOpacity> 
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigateConfiguraciones("Configuración del negocio")
                }
            >
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faStore} style={styles.icon} />
                    <Text style={styles.textButton}> Configuración del negocio </Text>
                </View>
            </TouchableOpacity> 
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigateConfiguraciones("Mis turnos")
                }
            >
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faCalendar} style={styles.icon} />
                    <Text style={styles.textButton}> Mis turnos </Text>
                </View>
                
            </TouchableOpacity>      
            <View >

        <TouchableOpacity style={{ height: 50}} >
          <View
            title="saveDatos"
            style={styles.bottomButton}
          >
            <Text
              style={{ fontSize: 15, color: "#FF8000", fontWeight: "bold" }}
            >
              Cerrar sesión
            </Text>
          </View>
        </TouchableOpacity>
      </View> 
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:20
  },
  button: {
      paddingTop: 10,
      paddingBottom: 15,
      paddingLeft: 10,
      color: "#fff",
      backgroundColor: "#fffff9",
      borderRadius: 10,
      borderColor: "#000",
    //   borderTopWidth: 1,
      borderBottomWidth: 1,
      
  },
  textButton: {
      color: "#000",
      fontSize: 20,
      paddingLeft:10
      
  },
  bottomButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    flex: 6,
    
  },
  icon: {
    color: "black",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  }
  

});
