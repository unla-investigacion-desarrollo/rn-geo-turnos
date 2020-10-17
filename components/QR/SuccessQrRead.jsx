import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SuccessQrRead ( props ) {
  
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#6DCAE1", "#0CA4C9"]}
        style={{
          flex: 1,
        }}
      >
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{width:170,height:170,backgroundColor:"white",borderRadius:200}}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Image source={require('../../assets/successIcon.png')} style={{width:220,height:220,position:"absolute"}}></Image>
            </View>
        </View>
         <View style={{ marginTop: 10,paddingTop:"20%" }}>
            <View style={styles.viewContainerText}>
              <Text style={styles.explanationText}>Recibimos tu aviso de que te encuentras en</Text>
              <Text style={styles.emprendimientoText}>{props.emprendimiento}</Text>
              <Text style={styles.emprendimientoText}> ¡No te olvides de escanear el QR al salir!</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create( {
 
  viewContainerText:{
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:"center"
  },
  viewContainer:{
   flex:1
  },
  labelText: {
    color: "white",
  },
  explanationText:{
    color:"white",
    textAlign:"center",
    fontSize:15
  },
  emprendimientoText:{
      marginTop:"5%",
    color:"white",
    // textAlign:"center",
    fontSize:18
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
