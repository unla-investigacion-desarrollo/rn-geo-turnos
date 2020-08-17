import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/types";

export default function Ingreso(props) {
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const setLogged = () => {
    if (documento.length > 0 && password.length > 0)
      dispatch({ type: actions.LOGGED, payload: 1 });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1A73E8",
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
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: "#ccc",
            backgroundColor: "white",
          }}
        ></View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 20, color: "white" }}>
            #Nombre de la Aplicación#
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Número de DNI
          </Text>

          <TextInput
            style={styles.input}
            value={documento}
            onChangeText={(value) => setDocumento(value)}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Contraseña</Text>

          <TextInput
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
              style={{ fontSize: 15, color: "#1A73E8", fontWeight: "bold" }}
            >
              Ingresar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
