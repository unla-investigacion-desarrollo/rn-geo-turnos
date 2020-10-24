import React, { useState } from "react";
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

export default function ListMisTurnos(props) {
  const [tabSeleccionado, setTabSeleccionado] = useState(0);

  const showCommentTurno = () =>
    Alert.alert(
      "Comentario que realizaste",
      "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad.",
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
        <View
          style={{
            hminHight: 90,
            backgroundColor: "rgba(0, 0, 0, 0.62)",
            borderRadius: 5,
            marginBottom: 5,
          }}
        >
          <Text style={{ padding: 10, color: "white", fontSize: 18 }}>
            Negocio: ** Nombre del Negocio **
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
              Horario: 21/12/1995 14:30hs
            </Text>
            <Text
              style={{
                color: "yellow",
                fontWeight: "bold",
                fontSize: 15,
                flex: 1,
              }}
            >
              Pendiente
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
                onPress={showCommentTurno}
              >
                <FontAwesomeIcon
                  icon={faCommentDots}
                  size={35}
                  style={{ color: "white" }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flex: 1, alignItems: "center" }}
                onPress={() => routeDirection(-34.7922239, -58.38193479999999)}
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
