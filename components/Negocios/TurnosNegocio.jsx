import React, { useState } from "react";
import { StyleSheet, View, Button, Text, TextInput } from "react-native";
import { Picker, Icon } from "native-base";
import { useSelector } from "react-redux";



export default function TurnosNegocio(props) {
  const negocio = useSelector((state) => state.marker_seleccionado.marcador_seleccionado);


  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [comments, setComments] = useState("");

  const postReservarTurno = () => {
    console.log(day,hour,comments)
  }

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={{ marginLeft: 15, marginRight: 15, flex: 13 }}>
            <View style={{marginTop: 15 }}>
                <Text style={styles.name}>
                  {negocio.name}
                </Text>
                <Text style={styles.address}>
                  Direccion: {negocio.direccion}
                </Text>
                <Text></Text>
                <Text style={styles.labelText}>Dia</Text>
                <Picker
                    note
                    mode="dropdown"
                    style={styles.input}
                    selectedValue={day}
                    onValueChange={(e) => {
                      setDay(e)
                    }}
                    iosIcon={
                    <Icon
                        name="arrow-down"
                        style={{ color: "#ccc", marginRight: 0 }}
                    />
                    }
                >
                    <Picker.Item label="20/08" value="0" />
                    <Picker.Item label="21/08" value="1" />
                    <Picker.Item label="22/08" value="2" />
                    <Picker.Item label="23/08" value="3" />
                    <Picker.Item label="24/08" value="4" />
                    <Picker.Item label="25/08" value="5" />
                    <Picker.Item label="26/08" value="6" />
                </Picker>
            </View> 
            <View style={{marginTop: 15 }}>
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
                    <Picker.Item label="8:30" value="0" />
                    <Picker.Item label="9:00" value="1" />
                    <Picker.Item label="9:30" value="2" />
                    <Picker.Item label="10:00" value="3" />
                </Picker>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.labelText}>Comentarios</Text>
                <View style={styles.viewContainer}>
                    <TextInput style={styles.textBox}
                      onChangeText={(e) => setComments(e)}
                      >
                    </TextInput>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={styles.viewContainer}>
                <Button title ="Reservar turno"  onPress={postReservarTurno}>
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
  },
  name:{
    fontSize: 30,
    textAlign:'center',
    width: "100%",
  },
  address:{
    fontSize: 20,
  }  
});
