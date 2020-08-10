import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Slider,
} from "react-native";
import { Picker, Icon } from "native-base";
import { useDispatch } from "react-redux";
import { setDataNegocio } from "../../actions/NuevoNegocioActions";
import {
  searchChange,
  validarCamposDatosNegocio,
} from "./NuevoNegocioFunctions";

export default function DatosNegocio(props) {
  const [capacidadPersonas, setCapacidadPersonas] = useState(0);
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState("");
  const [direccion, setDireccion] = useState("");
  const [piso, setPiso] = useState("");
  const [depto, setDepto] = useState("");
  const [rubro, setRubro] = useState(0);
  const [localidad, setLocalidad] = useState(0);
  const [provincia, setProvincia] = useState(0);
  const dispatch = useDispatch();

  const continuar = () => {
    let dataNegocio = {
      nombre: nombre,
      cuit: cuit,
      direccion: direccion,
      piso: piso,
      depto: depto,
      rubro: rubro,
      localidad: localidad,
      provincia: provincia,
      capacidadPersonas: capacidadPersonas,
      latitude: 0,
      longitude: 0,
    };
    if (validarCamposDatosNegocio(dataNegocio)) {
      searchChange(direccion + "+" + localidad + "+" + provincia).then(
        (response) => {
          dataNegocio.latitude = response.latitude;
          dataNegocio.longitude = response.longitude;

          console.log(dataNegocio.latitude, dataNegocio.longitude);

          if (dataNegocio.latitude !== 0 && dataNegocio.longitude !== 0) {
            dispatch(setDataNegocio(dataNegocio));
            props.navigation.navigate("Ubicación");
          }
        }
      );
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginLeft: 15, marginRight: 15, flex: 13 }}>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Nombre del Negocio</Text>
          <View style={styles.viewContainer}>
            <TextInput
              style={styles.input}
              value={nombre}
              onChangeText={(e) => setNombre(e)}
            ></TextInput>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>N° Cuit</Text>
          <View style={styles.viewContainer}>
            <TextInput
              style={styles.input}
              value={cuit}
              onChangeText={(e) => setCuit(e)}
            ></TextInput>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
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
            <Picker.Item label="Almirante Brown" value="1" />
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
            <Picker.Item label="Buenos Aires" value="1" />
          </Picker>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Rubro</Text>
          <Picker
            note
            mode="dropdown"
            style={styles.input}
            selectedValue={rubro}
            onValueChange={(e) => setRubro(e)}
            iosIcon={
              <Icon
                name="arrow-down"
                style={{ color: "#ccc", marginRight: 0 }}
              />
            }
          >
            <Picker.Item label="Almacen" value="1" />
          </Picker>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>
            Capacidad de Personas: {capacidadPersonas}
          </Text>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={50}
            minimumTrackTintColor="#1A73E8"
            maximumTrackTintColor="#ccc"
            onValueChange={(value) => setCapacidadPersonas(parseInt(value))}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Continuar"
          style={{ alignItems: "center" }}
          onPress={continuar}
        ></Button>
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
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
