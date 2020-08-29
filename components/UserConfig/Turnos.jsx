import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ListMisTurnos from "./Turnos/ListMisTurnos";
import ListTurnosNegocio from "./Turnos/ListTurnosNegocio";

export default function MisTurnos(props) {
  const [tabSeleccionado, setTabSeleccionado] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 9 }}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#6DCAE1", "#0CA4C9"]}
          style={{
            flex: 1,
          }}
        >
          {tabSeleccionado === 0 ? <ListMisTurnos /> : <ListTurnosNegocio />}
        </LinearGradient>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.containerLeft}>
          <TouchableOpacity
            style={{ justifyContent: "center", flex: 1 }}
            onPress={() => setTabSeleccionado(1)}
          >
            <Text
              style={
                tabSeleccionado === 1
                  ? styles.textTabSeleccionado
                  : styles.textTab
              }
            >
              Turnos Negocio
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerRight}>
          <TouchableOpacity
            style={{ justifyContent: "center", flex: 1 }}
            onPress={() => setTabSeleccionado(0)}
          >
            <Text
              style={
                tabSeleccionado === 0
                  ? styles.textTabSeleccionado
                  : styles.textTab
              }
            >
              Mis turnos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerRight: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ccc",
    borderLeftWidth: 0,
  },
  containerLeft: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 2,
  },
  textTabSeleccionado: {
    textAlign: "center",
    color: "#0CA4C9",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  textTab: {
    textAlign: "center",
  },
});
