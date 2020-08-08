import React, { useState } from "react";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";
import { Picker, Icon } from "native-base";


export default function TurnosNegocio(props) {

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={{ marginLeft: 15, marginRight: 15, flex: 13 }}>
            <View style={{marginTop: 15 }}>
                <Text style={styles.labelText}>Dia</Text>
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
            <View style={{marginTop: 15 }}>
                <Text style={styles.labelText}>Horario</Text>
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
                <Text style={styles.labelText}>Comentarios</Text>
                <View style={styles.viewContainer}>
                    <TextInput style={styles.textBox}></TextInput>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={styles.viewContainer}>
                <Button title ="Reservar turno"  >
                </Button>
                </View>
            </View>
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
  textBox: {
    height: 90,
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
  }
});
