import React, { useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterData } from "../../actions/RegisterActions";
import { LinearGradient } from "expo-linear-gradient";
import { actions } from "../../actions/types";

export default function RegistroDni(props) {
  const [documento, setDocumento] = useState("");
  const [nroTramite, setNroTramite] = useState("");
  const registro = useSelector((state) => state.registro);
  const dispatch = useDispatch();

  useEffect(() => {
    let registerOjecto = registro.registerData;
    if (registerOjecto.documento) {
      setDocumento(registerOjecto.documento);
    }
    if (registerOjecto.nroTramite) {
      setNroTramite(registerOjecto.nroTramite);
    }
  }, [registro]);

  const setData = () => {
    if (documento.length > 0) {
      if (nroTramite.length > 0) {
        let registroObject = {
          documento: documento,
          nroTramite: nroTramite,
        };

        dispatch(setRegisterData(registroObject));

        props.navigation.navigate("Datos Personales");
      } else {
        dispatch({
          type: actions.TOAST,
          payload: {
            message: "Debe ingresar su N° de tramite de su documento",
            type: "warning",
            visibilityTime: 10000,
          },
        });
      }
    } else {
      dispatch({
        type: actions.TOAST,
        payload: {
          message: "Debe ingresar su N° de documento",
          type: "warning",
          visibilityTime: 10000,
        },
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        // Background Linear Gradient
         colors={["#FFFFFF", "#59C9E5", "#0CA4C9"]}
        style={{
          flex: 1,
          padding: 10,
        }}
      >
     <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <View
            style={{
              flex:1,
              borderRadius: 10,
             justifyContent:"center",
             alignItems:"center"
            
            }}
          ><Image source={require('../../assets/1.png')} style={{flex:1,resizeMode:"contain",width:400}}/></View>
        
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Número de DNI
            </Text>

            <TextInput
              style={styles.input}
              value={documento}
              keyboardType="numeric"
              onChangeText={(value) => setDocumento(value)}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Número de Trámite
            </Text>

            <TextInput
              style={styles.input}
              value={nroTramite}
              keyboardType="numeric"
              onChangeText={(value) => setNroTramite(value)}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{
              padding: 15,
              paddingLeft: 0,
              flex: 1,
            }}
            onPress={() => props.navigation.navigate("Cámara")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ flex: 1 }}>
                <FontAwesomeIcon icon={faCamera} style={{ color: "white" }} />
              </View>
              <View style={{ flex: 12 }}>
                <Text style={{ color: "#fff" }}>Escanear Documento</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ height: 50 }} onPress={setData}>
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
                Continuar
              </Text>
            </View>
          </TouchableOpacity>
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
