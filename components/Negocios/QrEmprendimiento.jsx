import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Linking
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { baseUrl } from "../../Utils/constantes"
import { QRCode } from 'react-native-custom-qr-codes-expo';

export default function QrEmprendimiento ( ) {
  
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#6DCAE1", "#0CA4C9"]}
        style={{
          flex: 1,
        }}
      >
        <View style={{ marginLeft: 15, marginRight: 15, flex: 13,alignItems:"center",paddingTop:"20%" }}>
          <View style={{width:250,height:250,backgroundColor:"white", alignItems:"center",justifyContent:"center"}}> 
             <QRCode size={250} content='LOGO.png1'/>
          </View>
            <View style={{ marginTop: 10,paddingTop:"20%",flexDirection:"row" }}>
            <View style={styles.viewContainerText}>
             <Text style={styles.explanationText}>Este QR sirve para que tus clientes nos 
             notifiquen que están en tu local y así poder conocer el estado de ocupación del mismo.</Text>
            </View>
          </View>
          <View style={{ marginTop: 10,paddingTop:"20%",flexDirection:"row" }}>
            <View style={styles.viewContainer}>
              <TouchableOpacity
               onPress={()=>{ Linking.openURL(baseUrl+"emprendimiento/1/exportpdf")}}
                style={styles.button}
              >
                <Text style={styles.textButton}>Descargar tu QR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create( {
 
  viewContainerText:{
    flexDirection:'row',flexWrap: 'wrap'
  },
  viewContainer:{
   flex:1
  },
  labelText: {
    color: "white",
  },
  explanationText:{
    color:"white",
    textAlign:"center"
  },
 
 
  button: {
    backgroundColor: "white",
    height: 30,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 5,
  },
  textButton: {
    color: "#2572FF",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 5,
  },
} );
