import React, {useState, useEffect} from "react";
import { StyleSheet, View, Dimensions, Image, Text,  TextInput,
  TouchableOpacity, Button}  from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterData } from "../../actions/RegisterActions";


export default function DatosPersonales(props) {
  const registro = useSelector((state) => state.registro);

  const [documento, setDocumento] = useState("");
  const [nroTramite, setNroTramite] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cuil, setCuil] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    let registerOjecto = registro.registerData;
    setDocumento(registerOjecto.documento);
    setNroTramite(registerOjecto.nroTramite);
    setNombre(registerOjecto.nombre);
    setApellido(registerOjecto.apellido);
    setCuil(registerOjecto.cuil);
   
    console.log(
      registerOjecto)
    
  }, [registro]);


  const setData = () => {
    if (
      password.length > 0 && password == repetirPassword
      
    ) {
      
      let registroObject = {
        nombre: registro.registerData.nombre,
        apellido: registro.registerData.apellido,
        cuil: registro.registerData.cuil,
        documento: registro.registerData.documento,
        nroTramite: registro.registerData.nroTramite,
        direccion: registro.registerData.direccion,
        piso: registro.registerData.piso,
        depto: registro.registerData.depto,
        provincia: registro.registerData.provincia,
        localidad: registro.registerData.localidad,
        password: password,
      
      };
      
      dispatch(setRegisterData(registroObject));
      props.navigation.navigate("Configuracion de usuario");

      
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
      style={{
        flex: 1,
        backgroundColor: "rgba(57,147,255,0.7)",
        padding: 10,
      }}
    >
    
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Número de DNI
          </Text>

          <TextInput
            editable={false}
            style={styles.blockedInput}
            value={documento}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Número de Trámite
          </Text>

          <TextInput
            editable={false}
            style={styles.blockedInput}
            value={nroTramite}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Nombre
          </Text>

          <TextInput
            editable={false}
            style={styles.blockedInput}
            value={nombre}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Apellido
          </Text>

          <TextInput
            style={styles.blockedInput}
            editable={false}
            value={apellido}
          ></TextInput>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Cuil
          </Text>

          <TextInput
            style={styles.blockedInput}
            value={cuil}
          ></TextInput>
        </View>
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
            Repetir contraseña
          </Text>

          <TextInput
            style={styles.input}
            value={repetirPassword}
            onChangeText={(value) => setRepetirPassword(value)}
          ></TextInput>
        </View>
        
           
      </View>
      
      <View >
        <TouchableOpacity style={{ height: 50 }} onPress={setData}>
          <View
            title="saveDatos"
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
              Guardar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },
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
