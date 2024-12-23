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
import MarkUbicacion from "./MarkUbicacion";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../actions/types";
import { searchPosition } from "../NuevoNegocio/NuevoNegocioFunctions";
import { setRegisterData } from "../../actions/RegisterActions";
import { apiCalls } from "../../api/apiCalls";
import { LinearGradient } from "expo-linear-gradient";

export default function FormUbicacion(props) {
  const access = useSelector((state) => state.access);
  const registro = useSelector((state) => state.registro);
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [piso, setPiso] = useState(0);
  const [depto, setDepto] = useState("");
  const [ubicacionValidada,setUbicacionValidada] = useState(false);
  const [localidad, setLocalidad] = useState(0);
  const [localidades, setLocalidades] = useState([]);
  const [provincia, setProvincia] = useState(0);
  const [provincias, setProvincias] = useState([]);
  const [enableLocalidades, setEnableLocalidades] = useState(false);
  const dispatch = useDispatch();

  const isConfig = props.isConfig;

  useEffect(() => {
    let registerOjecto = registro.registerData;
    apiCalls
      .getProvincias()
      .then((response) => {
        response.data.unshift({
          idProvincia: 0,
          nombre: "Seleccione una provincia",
        });
        setProvincias(response.data);
      })
      .catch((code, message) => {});

    if (isConfig) {
      getLocalidadesPorProvincia(registerOjecto.provincia);
    }

    if (registerOjecto.calle) {
      setCalle(registerOjecto.calle);
    }
    if (registerOjecto.numero) {
      setNumero(registerOjecto.numero);
    }
    if (registerOjecto.piso) {
      setPiso(registerOjecto.piso);
    }
    if (registerOjecto.depto) {
      setDepto(registerOjecto.depto);
    }
    if (registerOjecto.localidad) {
      setLocalidad(registerOjecto.localidad);
    }
    if (registerOjecto.provincia) {
      setProvincia(registerOjecto.provincia);
    }
    
  }, [registro]);

  const setLogged = () => {
    if (calle.length > 0 && numero > 0 && localidad > 0 && provincia > 0) {
      const userInfo = {
        apellido: registro.registerData.apellido,
        celular: registro.registerData.celular,
        sexo: registro.registerData.sexo,
        cuil: registro.registerData.cuil,
        dni: parseInt(registro.registerData.documento),
        numeroTramite: registro.registerData.nroTramite,
        idPerfil: 2,
        loginVo: {
          clave: registro.registerData.password,
          email: registro.registerData.email,
        },
        nombre: registro.registerData.nombre,
        ubicacionVo: {
          calle: calle,
          numero: parseInt(numero),
          departamento: depto,
          idLocalidad: registro.registerData.localidad,
          idProvincia: registro.registerData.provincia,
          latitud: registro.registerData.latitude.toString(),
          longitud: registro.registerData.longitude.toString(),
          piso: parseInt(piso),
          usuarioModi: registro.registerData.cuil,
        },
        usuarioModi: registro.registerData.cuil,
      };
      apiCalls
        .postAltaUsuario(userInfo)
        .then((response) => {
          dispatch({
            type: actions.TOAST,
            payload: {
              message: "Te enviamos un mail para que valides tu correo",
              type: "info",
              visibilityTime: 5000,
            },
          });
          dispatch(setRegisterData({}));
          props.navigation.navigate("Ingreso");
        })
        .catch(error => {
          console.log(error.response.data.message)
          let errorMessage = error?.response?.data?.message ? error.response.data.message : "Error al completar el registro"
          if (errorMessage == "El objeto ya exite dentro de la BD."){
            errorMessage = "El DNI ingresado ya esta registrado"
          }
          dispatch({
            type: actions.TOAST,
            payload: {
              message: errorMessage,
              type: "error",
              visibilityTime: 3000,
            },
          });
        });
    } else {
      dispatch({
        type: actions.TOAST,
        payload: {
          message:
            "Debe completar la calle, el número y  los campos de dirección",
          type: "error",
          visibilityTime: 3000,
        },
      });
    }
  };

  const getLocalidadesPorProvincia = (e) => {
    setProvincia(e);
   // setUbicacionValidada(false);

    apiCalls
      .getLocalidadesPorProvincia(e)
      .then((response) => {
        setEnableLocalidades(true);
        response.data.unshift({
          idProvincia: 0,
          nombre: "Seleccione una localidad",
        });
        setLocalidades(response.data);
      })
      .catch((code, message) => {
        console.log(res.message);
      });
  };

  const setLocation = () => {
      if (calle.length > 0 && localidad > 0 && provincia > 0) {
          const ubicacionObject = {
                      calle: calle,
                      departamento: depto,
                      idLocalidad:localidad,
                      idProvincia: provincia,
                      latitud: registro.registerData.latitude,
                      longitud: registro.registerData.longitude,
                      numero: parseInt(numero),
                      piso: piso,
                      usuarioModi:"",                  
          }
            apiCalls
      .setNewUbicacion(registro.registerData.idUbicacion,ubicacionObject,access.token)
      .then((response) => {
        dispatch({
        type: actions.TOAST,
        payload: {
          message:
            "Se actualizó su ubicación.",
          type: "success",
          visibilityTime: 3000,
        },
      });
        props.navigation.navigate("Configuración");
      })
      .catch((res) => {
        console.log(res);
      });
         
      } 
  };

  const validarDireccion = () => {
    if (calle.length > 0 && numero > 0 && localidad > 0 && provincia > 0) {
      searchDireccionGoogle(calle, numero, localidad);
    } else {
      dispatch({
        type: actions.TOAST,
        payload: {
          message:
            "Debe completar la calle, el número y  los campos de dirección",
          type: "error",
          visibilityTime: 3000,
        },
      });
    }
  };

   const localidadSeleccionada = (locali) => localidades.find(
      (localidad) => localidad.idLocalidad === locali
    );
     const provinciaSeleccionada = (provi) => provincias.find(
      (provincia) => provincia.idProvincia === provi
    );

  const searchDireccionGoogle = (calle, numero, locali) => {

    const localidadString = localidadSeleccionada(locali);

    searchPosition(
      calle + " " + numero + " " + localidadString.nombre
    ).then((response) => {
      if (!isConfig) {
        let registroObject = {
          documento: registro.registerData.documento,
          nroTramite: registro.registerData.nroTramite,
          latitude: response.latitude,
          celular: registro.registerData.celular,
          sexo: registro.registerData.sexo,
          longitude: response.longitude,
          calle: calle,
          numero: numero,
          piso: piso,
          depto: depto,
          localidad: localidad,
          provincia: provincia,
          nombre: registro.registerData.nombre,
          apellido: registro.registerData.apellido,
          cuil: registro.registerData.cuil,
          email: registro.registerData.email,
          password: registro.registerData.password,
        };

        dispatch(setRegisterData(registroObject));
      } else {
        let registroObject = registro.registerData;
        registroObject.latitude = response.latitude;
        registroObject.longitude = response.longitude;
        registroObject.calle = calle;
        registroObject.numero = numero;
        registroObject.piso = piso;
        registroObject.depto = depto;
        registroObject.localidad = localidad;
        registroObject.provincia = provincia;

        dispatch(setRegisterData(registroObject));
      }
      setUbicacionValidada(true);
    });
  };

  const changeNumero = (numero) =>{
    setNumero(numero);
    setUbicacionValidada(false);
  }
   const changeLocalidad= (localidad) =>{
     setLocalidad(localidad);
    setUbicacionValidada(false);
  }
   const changeCalle = (calle) =>{
     setCalle(calle);
    setUbicacionValidada(false);
  }

  const pickerItemsLocalidades = localidades.map((i) => (
    <Picker.Item key={i.nombre} label={i.nombre} value={i.idLocalidad} />
  ));

  const pickerItemsProvincias = provincias.map((i) => (
    <Picker.Item key={i.nombre} label={i.nombre} value={i.idProvincia} />
  ));

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 3 }}>
            <View>
              <Text style={styles.labelText}>Calle</Text>
              <View style={styles.viewContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su dirección"
                  value={calle}
                  onChangeText={(e) => changeCalle(e)}
                ></TextInput>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10, flex: 1, paddingRight: 10 }}>
                <View>
                  <Text style={styles.labelText}>Número</Text>
                  <View style={styles.viewContainer}>
                    <TextInput
                      style={styles.input}
                      value={numero}
                      placeholder="Numero"
                      keyboardType="numeric"
                      onChangeText={(e) => changeNumero(e)}
                    ></TextInput>
                  </View>
                </View>
              </View>
              <View style={{ marginTop: 10, flex: 1, paddingRight: 10 }}>
                <View>
                  <Text style={styles.labelText}>Piso</Text>
                  <View style={styles.viewContainer}>
                    <TextInput
                      style={styles.input}
                      value={piso}
                      placeholder="Piso"
                      keyboardType="numeric"
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
                      placeholder="Departamento"
                      onChangeText={(e) => setDepto(e)}
                    ></TextInput>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.labelText}>Provincia</Text>
              <Picker
                note
                mode="dropdown"
                style={styles.input}
                selectedValue={provincia}
                onValueChange={(e) => getLocalidadesPorProvincia(e)}
                iosIcon={
                  <Icon
                    name="arrow-down"
                    style={{ color: "#ccc", marginRight: 0 }}
                  />
                }
              >
                {pickerItemsProvincias}
              </Picker>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.labelText}>Localidad</Text>
              <Picker
                note
                mode="dropdown"
                style={styles.input}
                selectedValue={localidad}
                enabled={enableLocalidades}
                onValueChange={(e) => changeLocalidad(e)}
                iosIcon={
                  <Icon
                    name="arrow-down"
                    style={{ color: "#ccc", marginRight: 0 }}
                  />
                }
              >
                {pickerItemsLocalidades}
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
            <View
              style={{
                bottom: 10,
                flex: 0.3,
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 10,
              }}
            >
              <TouchableOpacity onPress={validarDireccion}>
                <View
                  style={{
                    backgroundColor: "#0fc224",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Validar Dirección</Text>
                </View>
              </TouchableOpacity>
            </View>
            {ubicacionValidada?(
            <TouchableOpacity
              style={{ height: 50 }}
              onPress={isConfig ? setLocation : setLogged}
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
                  style={{
                    fontSize: 15,
                    color: "#2572FF",
                    fontWeight: "bold",
                  }}
                >
                  {isConfig ? "Guardar ubicación" : "Finalizar Registro"}
                </Text>
              </View>
            </TouchableOpacity>):<></>}
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
  labelText: {
    textAlign: "left",
    color: "white",
    fontWeight: "bold",
  },
});
