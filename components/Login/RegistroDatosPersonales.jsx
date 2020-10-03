import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker, Icon } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterData } from "../../actions/RegisterActions";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { apiCalls } from "../../api/apiCalls";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { actions } from "../../actions/types";
import { getIdPersona } from "../../Utils/functions";

export default function RegistroDni(props) {
  const [idPersona, setIdPersona] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cuil, setCuil] = useState("");
  const [celular, setCelular] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const registro = useSelector((state) => state.registro);
  const dispatch = useDispatch();

  const isConfig = props?.route?.params?.source === "config";

  useEffect(() => {
    const prueba = getIdPersona();
    //  console.log(getToken());

    if (!isConfig) {
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
      if (registerOjecto.email) {
        setEmail(registerOjecto.email);
      }
      if (registerOjecto.sexo) {
        setSexo(registerOjecto.sexo);
      }
      if (registerOjecto.password && !isConfig) {
        setPassword(registerOjecto.password);
      }
    } else {
      apiCalls
        .getInfoUsuario(idPersona)
        .then((response) => {
          setNombre(response.data.nombre);
          setApellido(response.data.apellido);
          setCuil(response.data.cuil);
          setCelular(response.data.celular);
          setEmail(response.data.login.email);
          setSexo(respoonsa.data.sexo);
        })
        .catch((code, message) => {
          dispatch({
            type: actions.TOAST,
            payload: {
              message: "Error al traer la informacion del usuario",
              type: "error",
              visibilityTime: 5000,
            },
          });
        });
    }
  }, []);

  const setData = () => {
    if (
      nombre.length > 0 &&
      apellido.length > 0 &&
      cuil.length > 0 &&
      celular.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      sexo.length > 0
    ) {
      let registroObject = {
        nombre: nombre,
        apellido: apellido,
        cuil: cuil,
        celular: celular,
        email: email,
        password: password,
        sexo: sexo,
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
      sexo: registro.registerData.sexo,
      depto: registro.registerData.depto,
      localidad: registro.registerData.localidad,
      provincia: registro.registerData.provincia,
      nombre: registro.registerData.nombre,
      apellido: registro.registerData.apellido,
      cuil: registro.registerData.cuil,
      email: email,
      password: password,
    };

    dispatch(setRegisterData(registroObject));

    props.navigation.navigate("Configuración");
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
        <ScrollView>
          <View style={{ flex: 3 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {isConfig && (
                <FontAwesomeIcon icon={faLock} style={{ color: "white" }} />
              )}{" "}
              Nombre
            </Text>

            <TextInput
              style={isConfig ? styles.blockedInput : styles.input}
              editable={!isConfig}
              placeholder="Ingrese su nombre"
              value={nombre}
              onChangeText={(value) => setNombre(value)}
            ></TextInput>

            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {isConfig && (
                  <FontAwesomeIcon icon={faLock} style={{ color: "white" }} />
                )}{" "}
                Apellido
              </Text>

              <TextInput
                style={isConfig ? styles.blockedInput : styles.input}
                editable={!isConfig}
                placeholder="Ingrese su apellido"
                value={apellido}
                onChangeText={(value) => setApellido(value)}
              ></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {isConfig && (
                  <FontAwesomeIcon icon={faLock} style={{ color: "white" }} />
                )}{" "}
                Cuil
              </Text>

              <TextInput
                style={isConfig ? styles.blockedInput : styles.input}
                editable={!isConfig}
                value={cuil}
                placeholder="Ingrese su N° de CUIL"
                keyboardType="numeric"
                onChangeText={(value) => setCuil(value)}
              ></TextInput>
            </View>
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <View style={{ width: "45%" }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Celular
                </Text>

                <TextInput
                  style={styles.input}
                  value={celular}
                  placeholder="Ingrese su celular"
                  keyboardType="numeric"
                  onChangeText={(value) => setCelular(value)}
                ></TextInput>
              </View>
              <View style={{ width: "55%", paddingLeft: 20 }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>Sexo</Text>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.input}
                  selectedValue={sexo}
                  onValueChange={(e) => setSexo(e)}
                  iosIcon={
                    <Icon
                      name="arrow-down"
                      style={{ color: "#ccc", marginRight: 0 }}
                    />
                  }
                >
                  <Picker.Item
                    key={"Seleccione un sexo"}
                    label={"Seleccione un sexo"}
                    value={""}
                  />
                  <Picker.Item key={"Mujer"} label={"Mujer"} value={"mujer"} />
                  <Picker.Item
                    key={"Hombre"}
                    label={"Hombre"}
                    value={"hombre"}
                  />
                </Picker>
              </View>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Acceso al Sistema
            </Text>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Correo electronico
              </Text>

              <TextInput
                style={styles.input}
                value={email}
                placeholder="Ingrese su correo electronico"
                onChangeText={(value) => setEmail(value)}
              ></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Contraseña
              </Text>

              <TextInput
                style={styles.input}
                value={password}
                placeholder="Ingrese una contraseña"
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
                placeholder="Repita su contraseña"
                onChangeText={(value) => setRepetirPassword(value)}
              ></TextInput>
            </View>
          </View>

          <View style={{ flex: 1, paddingTop: 50 }}>
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
        </ScrollView>
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
  iconContainer: {},
});
