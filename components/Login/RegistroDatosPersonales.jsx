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

export default function RegistroDni(props) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cuil, setCuil] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const registro = useSelector((state) => state.registro);
  const dispatch = useDispatch();

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
    if (registerOjecto.password) {
      setPassword(registerOjecto.password);
    }
  }, [registro]);

  const setData = () => {
    if (
      nombre.length > 0 &&
      apellido.length > 0 &&
      cuil.length > 0 &&
      password.length > 0
    ) {
      let registroObject = {
        nombre: nombre,
        apellido: apellido,
        cuil: cuil,
        password: password,
        documento: registro.registerData.documento,
        nroTramite: registro.registerData.nroTramite,
      };

      dispatch(setRegisterData(registroObject));

      props.navigation.navigate("Ubicación");
    }
  };

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
            onChangeText={(value) => setNombre(value)}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Apellido</Text>

          <TextInput
            style={styles.input}
            value={apellido}
            onChangeText={(value) => setApellido(value)}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Cuil</Text>

          <TextInput
            style={styles.input}
            value={cuil}
            onChangeText={(value) => setCuil(value)}
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
