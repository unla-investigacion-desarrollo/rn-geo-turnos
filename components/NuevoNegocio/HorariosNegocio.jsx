import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Slider,
} from "react-native";
import { Picker, Icon } from "native-base";
import ListaHorarios from "./ListaHorarios";

export default function HorariosNegocio(props) {
  const [tiempoAtencion, setTiempoAtencion] = useState(0);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginLeft: 15, marginRight: 15, flex: 13 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.labelText}>
            Tiempo promedio de atención al público: {tiempoAtencion}min
          </Text>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={50}
            minimumTrackTintColor="#1A73E8"
            maximumTrackTintColor="#ccc"
            onValueChange={(value) => setTiempoAtencion(parseInt(value))}
          />
        </View>
        <View style={{ flex: 2 }}>
          <ScrollView>
            <ListaHorarios />
          </ScrollView>
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <Text style={styles.labelText}>Día de la semana</Text>
          <Picker
            note
            mode="dropdown"
            style={styles.input}
            iosIcon={
              <Icon
                name="arrow-down"
                style={{ color: "#ccc", marginRight: 0 }}
              />
            }
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={styles.labelText}>Hora Desde</Text>
            <Picker
              note
              mode="dropdown"
              style={styles.input}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.labelText}>Hora Hasta</Text>
              <Picker
                note
                mode="dropdown"
                style={styles.input}
                iosIcon={
                  <Icon
                    name="arrow-down"
                    style={{ color: "#ccc", marginRight: 0 }}
                  />
                }
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={styles.labelText}>Hora Desde</Text>
            <Picker
              note
              mode="dropdown"
              style={styles.input}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.labelText}>Hora Hasta</Text>
              <Picker
                note
                mode="dropdown"
                style={styles.input}
                iosIcon={
                  <Icon
                    name="arrow-down"
                    style={{ color: "#ccc", marginRight: 0 }}
                  />
                }
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </View>
          </View>
        </View>
        <View
          style={{
            bottom: 10,
            flex: 0.3,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#0fc224",
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#fff" }}>Añadir Horario</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Button
          title="Continuar"
          style={{ alignItems: "center" }}
          onPress={() => props.navigation.navigate("Turnos")}
        ></Button>
      </View>
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
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
