import React, { useState, useEffect} from "react";
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
  faMapMarkerAlt,
  faTimes,
  faPhone,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { callNumber } from "../../../services/phone-services";
import { routeDirection } from "../../../services/location-service";
import DatePicker from "react-native-datepicker";
import {apiCalls} from "../../../api/apiCalls"
import { useSelector } from "react-redux";

export default function ListMisTurnos(props) {
  const [tabSeleccionado, setTabSeleccionado] = useState(0);
  const access = useSelector((state) => state.access);
  const [turnos, setTurnos] = useState([])

  useEffect(() => {
    getTurnos()
  }, []);

  const getTurnos  = () => {
    apiCalls.getTurnosUsuario(access.idPersona, access.token)
      .then((response) => {
        // console.log(response.data)
        let turnosAux = []
        response.data.forEach(t => {
          turnosAux.push({idTurno: t.idTurno, idEmprendimiento: t.emprendimiento.idEmprendimiento, nombreEmprendimiento: t.emprendimiento.nombre, comentarios: t.observaciones,
          fechaHora: t.fechaHora, estadoturno: t.estadoTurno.estado, idEstadoTurno: t.estadoTurno.idEstadoTurno, latitudEmprendimiento: t.emprendimiento.ubicacion.latitud,
          longitudEmprendimiento: t.emprendimiento.ubicacion.longitud})
        })
        setTurnos(turnosAux)
        // response.data.unshift({
        //   idProvincia: 0,
        //   nombre: "Seleccione una provincia",
        // });
        // setProvincias(response.data);
      })
      .catch((code, message) => {});
  }


  const showCommentTurno = (comentarios) =>
    Alert.alert(
      "Comentario que realizaste",
      comentarios,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  const cancelTurno = () =>
    Alert.alert(
      "Cancelar Turno",
      "¿Está seguro que quiere cancelar el turno?",
      [
        { text: "Cancelar", onPress: () => console.log("OK Pressed") },
        { text: "Confirmar", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

    const drawTurnos = () => {
      
      return turnos.map(t => {
        return(
          <View
            style={{
              hminHight: 90,
              backgroundColor: "rgba(0, 0, 0, 0.62)",
              borderRadius: 5,
              marginBottom: 5,
            }}
          >
            <Text style={{ padding: 10, color: "white", fontSize: 18 }}>
              Negocio: {t.nombreEmprendimiento}
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
  
                <TouchableOpacity
                  style={{ flex: 1, alignItems: "center" }}
                  onPress={() => routeDirection(parseFloat(t.latitudEmprendimiento), parseFloat(t.longitudEmprendimiento))}
                >
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size={35}
                    style={{ color: "#4284ff" }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, alignItems: "center" }}
                  onPress={cancelTurno}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    size={35}
                    style={{ color: "#ff2e2e" }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, alignItems: "center" }}
                  onPress={() => callNumber("1135949261")}
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
          date={new Date()}
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
    // backgroundColor: "transparent",
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
