import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { apiCalls } from "../../api/apiCalls";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/types";

export default function RestablecerPw(props) {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const sendEmail = () =>{
    apiCalls.postResetPassword({
      email:email
    })
      .then((response) => {
        dispatch( {
          type: actions.TOAST, payload: {
            message: "Si el correo corresponde a un usuario se le enviara un enlace para reestablecer su contraseña" ,
            type: "success",
            visibilityTime: 10000
          }
        })
      }).catch((code,message) =>{
        dispatch( {
          type: actions.TOAST, payload: {
            message: "Hubo un problema para reestablecer la contraseña, por favor intente nuevamente" ,
            type: "error",
            visibilityTime: 10000
          }
        })
     });
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["#6DCAE1", "#0CA4C9"]}
        style={{
          flex: 1,
          padding: 10,
        }}
      >
       
        <View style={{ flex: 1, top:"10%" }}>
          <View>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Ingrese su correo electronico
            </Text>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
            ></TextInput>
          </View>
          <View style={{ flex: 1, paddingTop:40 }}>
          <TouchableOpacity style={{ height: 50 }} 
            onPress={sendEmail}
          >
            <View
              title="Hola"
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontSize: 15, color: "#2572FF", fontWeight: "bold" }}
              >
                Reestablecer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
          
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 35,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginTop: 8,

    width: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
