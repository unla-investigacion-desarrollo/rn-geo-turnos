import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Slider } from "react-native";
import { CheckBox } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { setDataNegocio } from "../../actions/NuevoNegocioActions";
import { apiCalls } from "../../api/apiCalls";
import { switchMenu } from "../../actions/menuSwitchActions";
import { VER_NEGOCIOS } from "../../actions/menuOptions";
import { actions } from "../../actions/types";
import * as SecureStore from "expo-secure-store";
import { setTokenAxios } from "../../api/api";
import { setCredentials } from "../../actions/AccessActions";


export default function TurnosNegocio(props) {
  const [usaTurnos, setUsaTurnos] = useState(false);
  const [intervaloTurno, setIntervaloTurno] = useState(0);
  const datosNegocio = useSelector((state) => state.nuevoNegocio.dataNegocio);
  const dispatch = useDispatch();
  const horariosNegocio = useSelector((state) => state.nuevoNegocio.horarios);
  const access = useSelector((state) => state.access);

  const isConfig = props?.route?.name === "Editar Turnos del Negocio";


  const remember = async (loginResponse) => {
    setAccessCredentials(loginResponse);
  };


  const clearCredentials = async () => {
    try {
      await SecureStore.deleteItemAsync("credentials");
    } catch (e) {
      console.log(e);
    }
  };

  const setAccessCredentials = async (credentials) => {
    try {
      await SecureStore.setItemAsync(
        "credentials",
        JSON.stringify(credentials)
      );
      dispatch(setCredentials(credentials));
      setTokenAxios(credentials.token);
    } catch (e) {
      console.log(e);
    }
  };


  const setNewNegocio = () => {
    let newNegocio = datosNegocio
    newNegocio.usaTurnos = usaTurnos
    newNegocio.intervaloTurno = intervaloTurno
    let configuracionLocales = []
    
    let tiempoAtencion = horariosNegocio.tiempoAtencion
    horariosNegocio.horarios.forEach(h => {
      configuracionLocales.push({
        diaSemana: h.diaSemana.toString(),
        intervaloTurnos: intervaloTurno,
        tiempoAtencion: tiempoAtencion,
        turno1Desde: h.horaDesde1,
        turno1Hasta: h.horaHasta1,
        turno2Desde: h.horaDesde2,
        turno2Hasta: h.horaHasta2,
        usuarioModi: access.idPersona.toString()
      })
    })

    dispatch(setDataNegocio(newNegocio));
    // console.log(newNegocio)
    if(isConfig){
      apiCalls
      .setNewInfoEmprendimiento(access.idEmprendimiento,{
        aceptaFoto:true,
        capacidad: newNegocio.capacidadPersonas,
        configuracionLocales: configuracionLocales,
        cuit: newNegocio.cuit,
        idEstadoEmprendimiento: 2,
        idPersona: access.idPersona,
        idRubro: newNegocio.rubro, 
        idTipoEmprendimiento: newNegocio.emprendimiento,
        nombre: newNegocio.nombre,
        telefono: newNegocio.telefono,
        ubicacionVo: {
          calle: newNegocio.calle,
          numero: newNegocio.numero,
          departamento: newNegocio.depto ? newNegocio.depto.toString() : "",
          idLocalidad: newNegocio.localidad,
          idProvincia: newNegocio.provincia,
          latitud: newNegocio.latitude.toString(),
          longitud: newNegocio.longitude.toString(),
          piso: parseInt(newNegocio.piso)? parseInt(newNegocio.piso): 0,
          usuarioModi: access.idPersona.toString()
        },
        usuarioModi: access.idPersona.toString()
      }, access.token)
      .then((response) => {
        dispatch( {
          type: actions.TOAST, payload: {
            message: "Negocio modificado correctamente",
            type: "success",
            visibilityTime: 10000
          }
        } )
        props.navigation.navigate("Configuración");
      }).catch((res)=> {
        console.log(res.message)
      });
    }else{
      apiCalls
      .postAltaEmprendimiento({
        aceptaFoto:true,
        capacidad: newNegocio.capacidadPersonas,
        configuracionLocales: configuracionLocales,
        cuit: newNegocio.cuit,
        idPersona: access.idPersona, 
        idRubro: newNegocio.rubro,
        idTipoEmprendimiento: newNegocio.emprendimiento,
        nombre: newNegocio.nombre,
        ubicacionVo: {
          calle: newNegocio.calle,
          numero: newNegocio.numero,
          departamento: newNegocio.depto ? newNegocio.depto.toString() : "",
          idLocalidad: newNegocio.localidad,
          idProvincia: newNegocio.provincia,
          latitud: newNegocio.latitude.toString(),
          longitud: newNegocio.longitude.toString(),
          piso: parseInt(newNegocio.piso)? parseInt(newNegocio.piso): 0,
          usuarioModi: access.idPersona.toString()
        },
        usuarioModi: access.idPersona.toString()
  
      }, access.token)
      .then((response) => {
        const responseLogin = {
          token: access.token,
          idPersona: access.idPersona,
          idPerfil: access.idPerfil == 1 ? access.idPerfil : 3,
          idEmprendimiento: response.data.idEmprendimiento
        };
        clearCredentials();
        remember(responseLogin);
        dispatch( {
          type: actions.TOAST, payload: {
            message: "Negocio dado de alta correctamente",
            type: "success",
            visibilityTime: 10000
          }
        } )
        dispatch(switchMenu(VER_NEGOCIOS))
      }).catch(error => {
        console.log(error.response.data.message)

      });
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#6DCAE1", "#0CA4C9"]}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
            flexDirection: "row",
            flex: 13,

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 15 }}>Utilizar Turnos</Text>
          <CheckBox
            style={usaTurnos ? styles.checkBoxChecked : styles.checkBox}
            checked={usaTurnos}
            onPress={() => setUsaTurnos(usaTurnos ? false : true)}
          />
        </View>
        <View style={{ flex: 2, margin: 20 }}>
          {usaTurnos ? (
            <View style={{ marginTop: 10, flex: 1, justifyContent: "center" }}>
              <Text style={styles.labelText}>
                Intervalo entre turnos: {intervaloTurno}min
              </Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={60}
                minimumTrackTintColor="#2572FF"
                maximumTrackTintColor="#3e3e3e"
                thumbTintColor="white"
                onValueChange={(value) => setIntervaloTurno(parseInt(value))}
              />
            </View>
          ) : (
            <></>
          )}
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            onPress={setNewNegocio}
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
              {isConfig ? "Guardar datos" : "Finalizar Registro"}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxChecked: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#FFF",
    backgroundColor: "#2572FF",
  },
  labelText: { color: "#fff" },
  checkBox: {
    borderRadius: 5,
    borderColor: "#fff",
  },
});

