import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterData } from "../../actions/RegisterActions";
import { LinearGradient } from "expo-linear-gradient";

export default function RegistroDni(props) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cuil, setCuil] = useState("");
  const [celular, setCelular] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const registro = useSelector((state) => state.registro);
  const dispatch = useDispatch();

  const isConfig = props?.route?.params?.source === "config";

  useEffect(() => {
    let registerOjecto = registro.registerData;
    if (registerOjecto.nombre) {
      setNombre(registerOjecto.nombre);
    }
    if (registerOjecto.apellido) {
      setApellido(registerOjecto.apellido);
    }
    if (registerOjecto.cuil) {
      setCuil(registerOjecto.cuil);
    }
    if (registerOjecto.celular) {
      setCelular(registerOjecto.celular);
    }
    if (registerOjecto.password) {
      setPassword(registerOjecto.password);
    }
  }, [registro]);

  const setData = () => {
    if (
      nombre.length > 0 &&
      apellido.length > 0 &&
      cuil.length > 0 &&
      celular.length > 0 &&
      password.length > 0
    ) {
      let registroObject = {
        nombre: nombre,
        apellido: apellido,
        cuil: cuil,
        celular: celular,
        password: password,
        documento: registro.registerData.documento,
        nroTramite: registro.registerData.nroTramite,
      };

      dispatch(setRegisterData(registroObject));

      props.navigation.navigate("Ubicación");
    }
  };

  const saveNewData = () => {
    let registroObject = {
      documento: registro.registerData.documento,
      nroTramite: registro.registerData.nroTramite,
      latitude: registro.registerData.latitude,
      celular: celular,
      longitude: registro.registerData.longitude,
      direccion: registro.registerData.direccion,
      piso: registro.registerData.piso,
      depto: registro.registerData.depto,
      localidad: registro.registerData.localidad,
      provincia: registro.registerData.provincia,
      nombre: registro.registerData.nombre,
      apellido: registro.registerData.apellido,
      cuil: registro.registerData.cuil,
      password: password,
    };

    dispatch(setRegisterData(registroObject));

    props.navigation.navigate("Configuracion de usuario");
  };

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
        <View style={{ flex: 3 }}>
          <View>
            <Text style={{ color: "white", fontWeight: "bold" }}>Nombre</Text>

            <TextInput
              style={isConfig ? styles.blockedInput : styles.input}
              editable={!isConfig}
              value={nombre}
              onChangeText={(value) => setNombre(value)}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Apellido</Text>

            <TextInput
              style={isConfig ? styles.blockedInput : styles.input}
              editable={!isConfig}
              value={apellido}
              onChangeText={(value) => setApellido(value)}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Cuil</Text>

            <TextInput
              style={isConfig ? styles.blockedInput : styles.input}
              editable={!isConfig}
              value={cuil}
              onChangeText={(value) => setCuil(value)}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Celular</Text>

            <TextInput
              style={styles.input}
              value={celular}
              onChangeText={(value) => setCelular(value)}
            ></TextInput>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 15 }}>
            Acceso al Sistema
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Contraseña
            </Text>

            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
            ></TextInput>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Repetir Contraseña
            </Text>

            <TextInput
              style={styles.input}
              value={repetirPassword}
              onChangeText={(value) => setRepetirPassword(value)}
            ></TextInput>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ height: 50 }}
            onPress={isConfig ? saveNewData : setData}
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
                {isConfig ? "Guardar" : "Continuar"}
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
  blockedInput: {
    height: 35,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#DCDCDC",
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
