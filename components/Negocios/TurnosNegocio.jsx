import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Picker, Icon, Left, Right } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { apiCalls } from "../../api/apiCalls";
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "react-native-datepicker";
import { horarios } from "../../Utils/constantes";
import { actions } from "../../actions/types";


export default function TurnosNegocio ( props ) {
  const negocio = useSelector(
    ( state ) => state.marker_seleccionado.marcador_seleccionado
  );
  const dispatch = useDispatch();

  const [day, setDay] = useState( new Date().getDate() + "/" + ( new Date().getMonth() + 1 ) + "/" + new Date().getFullYear() );
  const [hour, setHour] = useState( horarios[0] );
  const [comments, setComments] = useState( "" );
  const access = useSelector((state) => state.access);

  console.log( negocio )


  const postReservarTurno = () => {

    let splitDay = day.split( "/" )
    let fechaHora = splitDay[2] + ( parseInt( splitDay[1] ) <= 9 ? "-0" : "-" ) + splitDay[1] + "-" + splitDay[0] + "T" + hour + ":00"

    apiCalls.postTurnos( {
      fechaHora: fechaHora,
      idEmprendimiento: negocio.id ? negocio.id : 1,
      idEstadoTurno: 1,
      idPersona: access.idPersona,
      observaciones: comments,
      usuarioModi: access.idPersona
    }, access.token ).then( ( response ) => {
      console.log( "Turno dado de alta correctamente" )
      dispatch( {
        type: actions.TOAST, payload: {
          message: "Turno dado de alta correctamente",
          type: "success",
          visibilityTime: 10000
        }
      } )
    } ).catch( ( code, message ) => {
      dispatch( {
        type: actions.TOAST, payload: {
          message: "Error al reservar un turno",
          type: "error",
          visibilityTime: 3000
        }
      } )
    } )
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
            <Text style={styles.name}>{negocio.name}</Text>
            <Text style={styles.address}>Dirección: {negocio.calle} {negocio.numero}</Text>
            <Text></Text>
            <Text style={styles.labelText}>Dia</Text>

            <DatePicker
              locale={"es"}
              style={styles.input}
              onDateChange={( date ) => setDay( date )}
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
              onValueChange={( e ) => setHour( e )}
              selectedValue={hour}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              {horarios.map( ( hora ) => {
                return <Picker.Item label={hora} value={hora} />;
              } )}
            </Picker>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.labelText}>Comentarios</Text>
            <View style={styles.viewContainer}>
              <TextInput
                style={styles.textBox}
                multiline={true}
                value={comments}
                onChangeText={( e ) => setComments( e )}
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

const styles = StyleSheet.create( {
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
} );
