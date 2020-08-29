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
import { LinearGradient } from "expo-linear-gradient";

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
      <LinearGradient
        // Background Linear Gradient
        colors={["#6DCAE1", "#0CA4C9"]}
        style={{
          flex: 1,
        }}
      >
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
            onPress={() => navigateConfiguraciones("Información Negocio")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faStore} style={styles.icon} />
              <Text style={styles.textButton}> Configuración del Negocio </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateConfiguraciones("Turnos")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faCalendar} style={styles.icon} />
              <Text style={styles.textButton}> Turnos </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateConfiguraciones("PDF")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faCalendar} style={styles.icon} />
              <Text style={styles.textButton}> PDF </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "transparent" }}>
          <View>
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: "white",
                marginLeft: 50,
                marginRight: 50,
                borderRadius: 5,
                marginBottom: 10,
              }}
              onPress={cerrarSesion}
            >
              <View title="saveDatos" style={styles.bottomButton}>
                <Text style={{ fontSize: 17, color: "red" }}>
                  Cerrar sesión
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    color: "#fff",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "#fff",
    //   borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  textButton: {
    color: "#fff",
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
    color: "#fff",
    right: 15,
    top: 5,
    position: "absolute",
  },
  icon: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
