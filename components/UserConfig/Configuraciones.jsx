import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserCircle,
  faMapMarkerAlt,
  faStore,
  faCalendar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { actions } from "../../actions/types";
import { useDispatch } from "react-redux";

export default function Configuraciones(props) {
  const dispatch = useDispatch();

  const navigateConfiguraciones = (opcion) => {
    props.navigation.navigate(opcion, { source: "config" });
  };
  const cerrarSesion = () => {
    dispatch({ type: actions.LOGGED, payload: 0 });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateConfiguraciones("Datos personales")}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesomeIcon icon={faUserCircle} style={styles.icon} />
            <Text style={styles.textButton}> Datos personales </Text>
            <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateConfiguraciones("Ubicación")}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
            <Text style={styles.textButton}> Ubicación </Text>
            <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateConfiguraciones("Configuración del negocio")}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesomeIcon icon={faStore} style={styles.icon} />
            <Text style={styles.textButton}> Configuración del Negocio </Text>
            <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateConfiguraciones("Mis turnos")}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesomeIcon icon={faCalendar} style={styles.icon} />
            <Text style={styles.textButton}> Mis turnos </Text>
            <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View>
          <TouchableOpacity style={{ height: 50 }} onPress={cerrarSesion}>
            <View title="saveDatos" style={styles.bottomButton}>
              <Text style={{ fontSize: 17, color: "red" }}>Cerrar sesión</Text>
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
    paddingTop: 20,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    color: "#fff",
    backgroundColor: "#fffff9",
    borderRadius: 10,
    borderColor: "#c9c8c5",
    //   borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  textButton: {
    color: "#000",
    fontSize: 15,
    paddingTop: 3,
    paddingLeft: 10,
  },
  bottomButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    flex: 6,
  },
  iconArrow: {
    color: "#8c8b82",
    right: 15,
    top: 5,
    position: "absolute",
  },
  icon: {
    color: "#8c8b82",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
