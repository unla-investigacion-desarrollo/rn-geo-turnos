import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Slider } from "react-native";
import { CheckBox } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function TurnosNegocio(props) {
  const [usaTurnos, setUsaTurnos] = useState(false);
  const [intervaloTurno, setIntervaloTurno] = useState(0);

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
            onPress={() => props.navigation.navigate("Turnos Negocio")}
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
              Finalizar Registro
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
