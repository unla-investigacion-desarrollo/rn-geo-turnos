import React, { useState,useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/types";
import { LinearGradient } from "expo-linear-gradient";
import { apiCalls } from "../../api/apiCalls";
import * as SecureStore from "expo-secure-store";
import { setCredentials } from "../../actions/AccessActions";
import { setTokenAxios } from "../../api/api";
import {getLocation} from "../../services/location-service"
import {centerMap} from "../../actions/centerMapActions"

export default function Ingreso(props) {
  const [email, setEmail] = useState("berro.gonza2195@gmail.com");
  const [password, setPassword] = useState("1234");
  const dispatch = useDispatch();


  const setLogged = () => {
    if (email.length > 0) {
      if (password.length > 0) {
        apiCalls
          .postLogin({
            clave: password,
            email: email,
          })
          .then((response) => {
            const responseLogin = {
              token: response.data.token,
              idPersona: response.data.idPersona,
              idPerfil:response.data.idPerfil,
              idEmprendimiento: response.data.idEmprendimiento
            };
            remember(responseLogin);
          })
          .catch((resp) => {
            dispatch({
              type: actions.TOAST,
              payload: {
                message: "Error al ingresar al sistema",
                type: "error",
                visibilityTime: 3000,
              },
            });
          });
      } else {
        dispatch({
          type: actions.TOAST,
          payload: {
            message: "Debe ingresar su contraseña",
            type: "warning",
            visibilityTime: 3000,
          },
        });
      }
    } else {
      read();
      dispatch({
        type: actions.TOAST,
        payload: {
          message: "Debe ingresar su Email",
          type: "warning",
          visibilityTime: 3000,
        },
      });
    }
  };

  const remember = async (loginResponse) => {
    setAccessCredentials(loginResponse);
    setEmail("");
    setPassword("");
    dispatch({ type: actions.LOGGED, payload: 1 });
  };

  const setAccessCredentials = async (credentials) => {
    try {
      await SecureStore.setItemAsync(
        "credentials",
        JSON.stringify(credentials)
      );
      dispatch(setCredentials(credentials));
      setTokenAxios(credentials.token);
    } catch (e) {
      console.log(e);
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
            <Text style={{ color: "white", fontWeight: "bold" }}>Email</Text>

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Contraseña
            </Text>

            <TextInput
              type="password"
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{
              padding: 15,
              paddingLeft: 0,
              flex: 1,
            }}
            onPress={() => props.navigation.navigate("Registro DNI")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ flex: 12 }}>
                <Text style={{ color: "#fff" }}>
                  ¿No tiene cuenta? Regístrese
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 15,
              paddingLeft: 0,
              flex: 1,
            }}
            onPress={() => props.navigation.navigate("Restablecer contraseña")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ flex: 12 }}>
                <Text style={{ color: "#fff" }}>¿Olvido su contraseña?</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ height: 50 }} onPress={setLogged}>
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
                Ingresar
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
