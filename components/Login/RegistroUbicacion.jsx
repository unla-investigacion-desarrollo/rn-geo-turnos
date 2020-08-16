import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker, Icon } from "native-base";
import MarkUbicacion from "./MarkUbicacion";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/types";
export default function RegistroDni(props) {
  const [direccion, setDireccion] = useState("");
  const [piso, setPiso] = useState("");
  const [depto, setDepto] = useState("");
  const [localidad, setLocalidad] = useState(0);
  const [provincia, setProvincia] = useState(0);
  const dispatch = useDispatch();

  const setLogged = () => {
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
      <View style={{ flex: 3 }}>
        <View>
          <Text style={styles.labelText}>Dirección</Text>
          <View style={styles.viewContainer}>
            <TextInput
              style={styles.input}
              value={direccion}
              onChangeText={(e) => setDireccion(e)}
            ></TextInput>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: 10, flex: 1, paddingRight: 10 }}>
            <View>
              <Text style={styles.labelText}>Piso</Text>
              <View style={styles.viewContainer}>
                <TextInput
                  style={styles.input}
                  value={piso}
                  onChangeText={(e) => setPiso(e)}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 10, flex: 1 }}>
            <View>
              <Text style={styles.labelText}>Departamento</Text>
              <View style={styles.viewContainer}>
                <TextInput
                  style={styles.input}
                  value={depto}
                  onChangeText={(e) => setDepto(e)}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Localidad</Text>
          <Picker
            note
            mode="dropdown"
            style={styles.input}
            selectedValue={localidad}
            onValueChange={(e) => setLocalidad(e)}
            iosIcon={
              <Icon
                name="arrow-down"
                style={{ color: "#ccc", marginRight: 0 }}
              />
            }
          >
            <Picker.Item label="Seleccione una localidad" value="0" />
            <Picker.Item label="Almirante Brown" value="1" />
            <Picker.Item label="Banfield" value="2" />
          </Picker>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Provincia</Text>
          <Picker
            note
            mode="dropdown"
            style={styles.input}
            selectedValue={provincia}
            onValueChange={(e) => setProvincia(e)}
            iosIcon={
              <Icon
                name="arrow-down"
                style={{ color: "#ccc", marginRight: 0 }}
              />
            }
          >
            <Picker.Item label="Seleccione una provincia" value="0" />
            <Picker.Item label="Buenos Aires" value="1" />
            <Picker.Item label="Chaco" value="2" />
          </Picker>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <MarkUbicacion />
        </View>
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
              Finalizar Registro
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
  labelText: {
    textAlign: "left",
    color: "white",
    fontWeight: "bold",
  },
});
