import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Picker, Icon, Left, Right } from "native-base";
import { useSelector } from "react-redux";
import { apiCalls } from "../../api/apiCalls";
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "react-native-datepicker";
import { horarios } from "../../Utils/constantes";

export default function TurnosNegocio(props) {
  const negocio = useSelector(
    (state) => state.marker_seleccionado.marcador_seleccionado
  );

  const [day, setDay] = useState(new Date());
  const [hour, setHour] = useState(0);
  const [comments, setComments] = useState("");

  const postReservarTurno = () => {
    //EJEMPLO API CALL
    // apiCalls.postArticulo({
    //   activoComercial: true,
    //   codBarra: "asd",
    //   descripcion: "asd",
    //   foto: "asd",
    //   idCategoria: 1,
    //   idMarca: 1,
    //   idUnidadMedida: 1,
    //   nombre: "asd",
    //   peso: "asd",
    //   precio: 1,
    //   usuarioModi: "asd",
    //   visible: true
    // }).then((response) => {
    //   console.log(response.data)
    // })
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
        <View style={{ marginLeft: 15, marginRight: 15, flex: 13 }}>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.name}>**Nombre del negocio**</Text>
            <Text style={styles.address}>Dirección: {negocio.direccion}</Text>
            <Text></Text>
            <Text style={styles.labelText}>Dia</Text>

            <DatePicker
              style={styles.input}
              onDateChange={(date) => setDay(date)}
              date={day}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  position: "absolute",
                  left: 0,
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
          <View style={{ marginTop: 15 }}>
            <Text style={styles.labelText}>Horario</Text>
            <Picker
              note
              mode="dropdown"
              style={styles.input}
              onValueChange={(e) => setHour(e)}
              selectedValue={hour}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              {horarios.map((hora) => {
                return <Picker.Item label={hora} value={hora} />;
              })}
            </Picker>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.labelText}>Comentarios</Text>
            <View style={styles.viewContainer}>
              <TextInput
                style={styles.textBox}
                multiline={true}
                onChangeText={(e) => setComments(e)}
              ></TextInput>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.viewContainer}>
              <TouchableOpacity
                onPress={postReservarTurno}
                style={styles.button}
              >
                <Text style={styles.textButton}>Reservar turno</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
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
    color: "white",
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
  },
  name: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    width: "100%",
    marginBottom: 10,
  },
  address: {
    color: "white",
    fontSize: 15,
  },
  button: {
    backgroundColor: "white",
    height: 30,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 5,
  },
  textButton: {
    color: "#2572FF",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 5,
  },
});
