import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setRegisterData } from "../../actions/RegisterActions";

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
    if (documento.length > 0 && nroTramite.length > 0) {
      let registroObject = {
        documento: documento,
        nroTramite: nroTramite,
      };

      dispatch(setRegisterData(registroObject));

      props.navigation.navigate("Datos Personales");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(57,147,255,0.7)",
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
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Número de Trámite
          </Text>

          <TextInput
            style={styles.input}
            value={nroTramite}
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
              style={{ fontSize: 15, color: "rgba(57,147,255,0.7)", fontWeight: "bold" }}
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
