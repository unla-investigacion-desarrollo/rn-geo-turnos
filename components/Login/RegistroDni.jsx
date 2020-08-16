import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function RegistroDni(props) {
  const [documento, setDocumento] = useState("");
  const [nroTramite, setNroTramite] = useState("");

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
            borderRadius: "50%",
            borderWidth: "3px",
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
            onChange={(value) => setDocumento(value.value)}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Número de Trámite
          </Text>

          <TextInput
            style={styles.input}
            value={nroTramite}
            onChange={(value) => setNroTramite(value.value)}
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
        <TouchableOpacity
          style={{ height: 50 }}
          onPress={() => props.navigation.navigate("Datos Personales")}
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
