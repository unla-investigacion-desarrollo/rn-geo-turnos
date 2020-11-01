import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCommentDots,
  faTimes,
  faCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { callNumber } from "../../../services/phone-services";
import DatePicker from "react-native-datepicker";
import {apiCalls} from "../../../api/apiCalls"
import { useSelector } from "react-redux";


export default function ListTurnosNegocio(props) {
  const [tabSeleccionado, setTabSeleccionado] = useState(0);
  const access = useSelector((state) => state.access);
  const [turnos, setTurnos] = useState([])
  const [day, setDay] = useState( new Date().getDate().length > 1 ?  +new Date().getDate() : "0"+new Date().getDate() + "/" + ( new Date().getMonth() + 1 ) + "/" + new Date().getFullYear() );


  useEffect(() => {
    getTurnos()
  }, [day]);

  const getTurnos  = () => {
    
    apiCalls.getTurnosEmprendimiento(access.idEmprendimiento, day,access.token)
      .then((response) => {
        let turnosAux = []
        response.data.forEach(t => {
          let fechaAux = t.fechaHora.split("T")[0] + " " + t.fechaHora.split("T")[1].split(".")[0]
          console.log(t.idEstadoTurno)
          turnosAux.push({idTurno: t.idTurno, idEmprendimiento: t.idEmprendimiento, nombreEmprendimiento: t.nombre, comentarios: t.observaciones,
          fechaHora: fechaAux, estadoturno: t.idEstadoTurno == 2 ? "Aceptado" : "Pendiente", idEstadoTurno: t.idEstadoTurno, latitudEmprendimiento: t.latitud,
          longitudEmprendimiento: t.longitud, telefono: t.telefono})
        })
        setTurnos(turnosAux)
      })
      .catch(error => {});
  }

  const rechazarTurno = (idTurno) => {
    let newIdEstadoTurno = 1
    apiCalls.modificarEstadoTurno(idTurno,{idEstadoTurno: newIdEstadoTurno},access.token)
    .then((response) => {
      getTurnos()
    })
    .catch(error => {console.log(error.response.message)});
  }

  const aceptarTurno = (idTurno) => {
    let newIdEstadoTurno = 2
    apiCalls.modificarEstadoTurno(idTurno,{idEstadoTurno: newIdEstadoTurno},access.token)
    .then((response) => {
      console.log(response.data)
      getTurnos()
    })
    .catch(error => {console.log(error.response.message)});
  }

  const showCommentTurno = () =>
    Alert.alert(
      "Comentario del Cliente",
      comentarios,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  const cancelTurno = (idTurno) =>
    Alert.alert(
      "Rechazar Turno",
      "¿Está seguro que quiere rechazar el turno?",
      [
        { text: "Cancelar", onPress: () => console.log("OK Pressed") },
        { text: "Confirmar", onPress: () => rechazarTurno(idTurno) },
      ],
      { cancelable: false }
    );
  const acceptTurno = (idTurno) =>
    Alert.alert(
      "Aceptar Turno",
      "¿Está seguro que quiere aceptar el turno?",
      [
        { text: "Cancelar", onPress: () => console.log("OK Pressed") },
        { text: "Confirmar", onPress: () => aceptarTurno(idTurno) },
      ],
      { cancelable: false }
    );

  const drawTurnos = () => {
    return turnos.map(t => {
      return(

      <View
          key={t.idTurno}
          style={{
            minHeight: 90,
            backgroundColor: "rgba(0, 0, 0, 0.62)",
            borderRadius: 5,
            marginBottom: 5,
          }}
        >
          <Text style={{ padding: 10, color: "white", fontSize: 18 }}>
            Cliente: {t.nombre}
          </Text>
          <View
            style={{
              padding: 10,
              paddingTop: 0,
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "white", fontSize: 15, flex: 2 }}>
              Horario: {t.fechaHora}
            </Text>
            <Text
              style={{
                color: "yellow",
                fontWeight: "bold",
                fontSize: 15,
                flex: 1,
              }}
            >
              {t.estadoturno}
            </Text>
          </View>
          <View style={{ padding: 10, flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{ flex: 1, alignItems: "center" }}
                onPress={() => showCommentTurno(t.comentarios)}
                >
                <FontAwesomeIcon
                  icon={faCommentDots}
                  size={35}
                  style={{ color: "white" }}
                />
              </TouchableOpacity>

              {t.idEstadoTurno !== 2 && <TouchableOpacity
                style={{ flex: 1, alignItems: "center" }}
                onPress={() => acceptTurno(t.idTurno)}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  size={35}
                  style={{ color: "#36d33b" }}
                />
              </TouchableOpacity>}

              <TouchableOpacity
                style={{ flex: 1, alignItems: "center" }}
                onPress={() => cancelTurno(t.idTurno)}
                >
                <FontAwesomeIcon
                  icon={faTimes}
                  size={35}
                  style={{ color: "#ff2e2e" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flex: 1, alignItems: "center" }}
                onPress={() => callNumber(t.telefono)}
                >
                <FontAwesomeIcon
                  icon={faPhone}
                  size={35}
                  style={{ color: "white" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    })
  }

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 0 }}>
      <View style={{ width: "100%", marginBottom: 15 }}>
        <DatePicker
          locale={"es"}
          style={styles.datePicker}
          date={day}
          onDateChange={( date ) => setDay( date )}
          customStyles={{
            dateText: {
              color: "#fff",
            },
            dateInput: {
              borderWidth: 0,
              width: "60%",
              position: "absolute",
              right: 0,
              borderBottomColor: "white",
              borderBottomWidth: 2,
            },
            dateIcon: {
              position: "absolute",
              right: 0,
            },
          }}
          placeholder={"Seleccionar Día"}
          mode="date"
          format="DD/MM/yyyy"
          confirmBtnText="Seleccionar"
          cancelBtnText="Cancelar"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
         {turnos.length > 0 && drawTurnos()}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  datePicker: {
    height: 35,
    // elevation: 8,
    borderRadius: 5,
    backgroundColor: "transparent",
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
