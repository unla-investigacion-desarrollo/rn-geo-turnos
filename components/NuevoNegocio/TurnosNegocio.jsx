import React, { useState } from "react";
import { StyleSheet, View, Button, Text, Slider } from "react-native";
import { CheckBox, Toast, Icon } from "native-base";

export default function TurnosNegocio(props) {
  const [usaTurnos, setUsaTurnos] = useState(false);
  const [intervaloTurno, setIntervaloTurno] = useState(0);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
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
        <Text>Utilizar Turnos</Text>
        <CheckBox
          style={usaTurnos ? styles.checkBoxChecked : styles.checkBox}
          checked={usaTurnos}
          onPress={() => setUsaTurnos(usaTurnos ? false : true)}
        />
      </View>
      {usaTurnos ? (
        <View style={{ flex: 4, margin: 20 }}>
          <View style={{ marginTop: 10, flex: 1, justifyContent: "center" }}>
            <Text style={styles.labelText}>
              Intervalo entre turnos: {intervaloTurno}min
            </Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={60}
              minimumTrackTintColor="#1A73E8"
              maximumTrackTintColor="#ccc"
              onValueChange={(value) => setIntervaloTurno(parseInt(value))}
            />
          </View>
        </View>
      ) : (
        <></>
      )}
      <View style={{ flex: 1 }}>
        <Button
          title="Finalizar Registro"
          style={{ alignItems: "center" }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxChecked: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#1A73E8",
    backgroundColor: "#1A73E8",
  },
  checkBox: {
    borderRadius: 5,
    borderColor: "#1A73E8",
  },
});
