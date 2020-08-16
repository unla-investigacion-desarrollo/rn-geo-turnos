import React from "react";
import {
  Text,
  Button,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  SegmentedControlIOSComponent,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function RegistroDni(props) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cuil, setCuil] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [repetirContrasenia, setRepetirContrasenia] = useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1A73E8",
        padding: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ color: "white", fontWeight: "bold" }}>Nombre</Text>

          <TextInput
            style={styles.input}
            value={nombre}
            onChange={(value) => setNombre(value.value)}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Apellido</Text>

          <TextInput
            style={styles.input}
            value={apellido}
            onChange={(value) => setApellido(value.value)}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Cuil</Text>

          <TextInput
            style={styles.input}
            value={cuil}
            onChange={(value) => setCuil(value.value)}
          ></TextInput>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 15 }}>
          Acceso al Sistema
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Contraseña</Text>

          <TextInput
            style={styles.input}
            value={contrasenia}
            onChange={(value) => setContrasenia(value.value)}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Repetir Contraseña
          </Text>

          <TextInput
            style={styles.input}
            value={repetirContrasenia}
            onChange={(value) => setRepetirContrasenia(value.value)}
          ></TextInput>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ height: 50 }}
          onPress={() => props.navigation.navigate("Ubicación")}
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
              style={{ fontSize: 15, color: "#1A73E8", fontWeight: "bold" }}
            >
              Continuar
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
