import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Slider } from "react-native";
import { Picker, Icon } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { setDataNegocio } from "../../actions/NuevoNegocioActions";
import {
  searchPosition,
  validarCamposDatosNegocio,
} from "./NuevoNegocioFunctions";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function DatosNegocio(props) {
  const datosNegocio = useSelector((state) => state.nuevoNegocio.dataNegocio);
  const [capacidadPersonas, setCapacidadPersonas] = useState(0);
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState("");
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [piso, setPiso] = useState("");
  const [depto, setDepto] = useState("");
  const [rubro, setRubro] = useState(0);
  const [emprendimiento, setEmprendimiento] = useState(0);
  const [localidad, setLocalidad] = useState(0);
  const [provincia, setProvincia] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (datosNegocio.capacidadPersonas) {
      setCapacidadPersonas(datosNegocio.capacidadPersonas);
    }
    if (datosNegocio.nombre) {
      setNombre(datosNegocio.nombre);
    }
    if (datosNegocio.cuit) {
      setCuit(datosNegocio.cuit);
    }
    if (datosNegocio.calle) {
      setCalle(datosNegocio.calle);
    }
    if (datosNegocio.numero) {
      setNumero(datosNegocio.numero);
    }
    if (datosNegocio.piso) {
      setPiso(datosNegocio.piso);
    }
    if (datosNegocio.depto) {
      setDepto(datosNegocio.depto);
    }
    if (datosNegocio.rubro) {
      setRubro(datosNegocio.rubro);
    }
    if (datosNegocio.emprendimiento) {
      setEmprendimiento(datosNegocio.emprendimiento);
    }
    if (datosNegocio.localidad) {
      setLocalidad(datosNegocio.localidad);
    }
    if (datosNegocio.provincia) {
      setProvincia(datosNegocio.provincia);
    }
  }, [datosNegocio]);

  const continuar = () => {
    let dataNegocio = {
      nombre: nombre,
      cuit: cuit,
      calle: calle,
      numero: numero,
      piso: piso,
      depto: depto,
      rubro: rubro,
      emprendimiento: emprendimiento,
      localidad: localidad,
      provincia: provincia,
      capacidadPersonas: capacidadPersonas,
      latitude: 0,
      longitude: 0,
    };
    if (validarCamposDatosNegocio(dataNegocio)) {
      searchPosition(calle + " " + numero).then((response) => {
        dataNegocio.latitude = response.latitude;
        dataNegocio.longitude = response.longitude;

        if (dataNegocio.latitude !== 0 && dataNegocio.longitude !== 0) {
          dispatch(setDataNegocio(dataNegocio));
          props.navigation.navigate("Ubicación Negocio");
        }
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#6DCAE1", "#0CA4C9"]}
        style={{
          flex: 1,
        }}
      >
        <View style={{ marginLeft: 15, marginRight: 15, flex: 13 }}>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Nombre del Negocio</Text>
            <View style={styles.viewContainer}>
              <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={(e) => setNombre(e)}
              ></TextInput>
            </View>
          </View>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>N° Cuit</Text>
            <View style={styles.viewContainer}>
              <TextInput
                style={styles.input}
                value={cuit}
                onChangeText={(e) => setCuit(e)}
              ></TextInput>
            </View>
          </View>

          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Calle</Text>
            <View style={styles.viewContainer}>
              <TextInput
                style={styles.input}
                value={calle}
                onChangeText={(e) => setCalle(e)}
              ></TextInput>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 7, flex: 1, paddingRight: 10 }}>
              <View>
                <Text style={styles.labelText}>Número</Text>
                <View style={styles.viewContainer}>
                  <TextInput
                    style={styles.input}
                    value={numero}
                    onChangeText={(e) => setNumero(e)}
                  ></TextInput>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 7, flex: 1, paddingRight: 10 }}>
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
            <View style={{ marginTop: 7, flex: 1 }}>
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
          <View style={{ marginTop: 7 }}>
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
          <View style={{ marginTop: 7 }}>
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
          <View style={{ marginTop: 7 }}>
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
              <Picker.Item label="Seleccione un rubro" value="0" />
              <Picker.Item label="Almacen" value="1" />
              <Picker.Item label="Kiosko" value="2" />
            </Picker>
          </View>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Tipo de Emprendimiento</Text>
            <Picker
              note
              mode="dropdown"
              style={styles.input}
              selectedValue={emprendimiento}
              onValueChange={(e) => setEmprendimiento(e)}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              <Picker.Item label="Seleccione un rubro" value="0" />
              <Picker.Item label="Servicios" value="1" />
              <Picker.Item label="Comercios" value="2" />
            </Picker>
          </View>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>
              Capacidad de Personas: {capacidadPersonas}
            </Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              value={capacidadPersonas}
              minimumValue={0}
              maximumValue={50}
              minimumTrackTintColor="#fff"
              maximumTrackTintColor="#3e3e3e"
              thumbTintColor="white"
              onValueChange={(value) => setCapacidadPersonas(parseInt(value))}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={continuar}
            style={{
              backgroundColor: "white",
              height: 30,
              marginLeft: 50,
              marginRight: 50,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#2572FF",
                fontSize: 15,
                textAlign: "center",
                paddingTop: 5,
              }}
            >
              Continuar
            </Text>
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
  labelText: {
    textAlign: "left",
    color: "white",
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
