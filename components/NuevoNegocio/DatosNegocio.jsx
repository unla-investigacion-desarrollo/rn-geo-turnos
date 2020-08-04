import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Slider,
} from "react-native";
import { Picker, Icon } from "native-base";

export default function DatosNegocio(props) {
  const [capacidadPersonas, setCapacidadPersonas] = useState(0);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginLeft: 15, marginRight: 15, flex: 13 }}>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Nombre del Negocio</Text>
          <View style={styles.viewContainer}>
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>N° Cuit</Text>
          <View style={styles.viewContainer}>
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Dirección</Text>
          <View style={styles.viewContainer}>
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: 10, flex: 1, paddingRight: 10 }}>
            <View>
              <Text style={styles.labelText}>Piso</Text>
              <View style={styles.viewContainer}>
                <TextInput style={styles.input}></TextInput>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 10, flex: 1 }}>
            <View>
              <Text style={styles.labelText}>Departamento</Text>
              <View style={styles.viewContainer}>
                <TextInput style={styles.input}></TextInput>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Rubro</Text>
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
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Localidad</Text>
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
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>Provincia</Text>
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
        <View style={{ marginTop: 10 }}>
          <Text style={styles.labelText}>
            Capacidad de Personas: {capacidadPersonas}
          </Text>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={50}
            minimumTrackTintColor="#1A73E8"
            maximumTrackTintColor="#ccc"
            onValueChange={(value) => setCapacidadPersonas(parseInt(value))}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Continuar"
          style={{ alignItems: "center" }}
          onPress={() => props.navigation.navigate("Horarios")}
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
