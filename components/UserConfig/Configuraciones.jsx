import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity, Button}  from "react-native";
import { useSelector, useDispatch } from "react-redux";

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
                <Text style={styles.textButton}> Datos personales </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigateConfiguraciones("Ubicación")
                }
            >
                <Text style={styles.textButton}> Ubicación </Text>
            </TouchableOpacity> 
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigateConfiguraciones("Configuración del negocio")
                }
            >
                <Text style={styles.textButton}> Configuración del negocio </Text>
            </TouchableOpacity> 
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigateConfiguraciones("Mis turnos")
                }
            >
                <Text style={styles.textButton}> Mis turnos </Text>
            </TouchableOpacity>       
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },
  button: {
      paddingTop: 10,
      paddingBottom: 15,
      paddingLeft: 10,
      color: "#fff",
      backgroundColor: "#fffff9",
      borderBottomColor: "#007AFF",
      borderRadius: 10,
      borderColor: "#fffff9",
      marginBottom:20,
      
      borderWidth: 1
  },
  textButton: {
      color: "#007AFF",
      fontSize: 20,
      
  }

});
