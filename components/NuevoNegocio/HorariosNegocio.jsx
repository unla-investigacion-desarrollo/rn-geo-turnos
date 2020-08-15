import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Slider,
  TouchableOpacity,
} from "react-native";
import { Picker, Icon } from "native-base";
import ListaHorarios from "./ListaHorarios";
import { horarios, dias } from "../../Utils/constantes";
import { setHorariosNegocio } from "../../actions/NuevoNegocioActions";
import { useDispatch, useSelector } from "react-redux";

export default function HorariosNegocio(props) {
  const [diaSemana, setDiaSemana] = useState(0);
  const [horaDesde1, setHoraDesde1] = useState("");
  const [horaDesde2, setHoraDesde2] = useState("");
  const [horaHasta1, setHoraHasta1] = useState("");
  const [horaHasta2, setHoraHasta2] = useState("");
  const [tiempoAtencion, setTiempoAtencion] = useState(0);
  const [diasSemanaDisponibles, setDiasSemanaDisponibles] = useState([]);
  const dispatch = useDispatch();

  const horariosNegocio = useSelector((state) => state.nuevoNegocio.horarios);

  useEffect(() => {
    if (horariosNegocio.horarios !== undefined) {
      let diasDisponibles = [];

      for (let i = 0; i < dias.length; i++) {
        let exists = false;
        for (let j = 0; j < horariosNegocio.horarios.length; j++) {
          if (dias[i].dia === horariosNegocio.horarios[j].diaSemana) {
            exists = true;
          }
        }
        if (!exists) {
          diasDisponibles = [...diasDisponibles, dias[i]];
        }
      }
      setDiasSemanaDisponibles(diasDisponibles);
    } else {
      setDiasSemanaDisponibles(dias);
    }
  }, [horariosNegocio]);

  const agregarHorario = () => {
    let horario = {
      diaSemana: diaSemana,
      horaDesde1: horaDesde1,
      horaHasta1: horaHasta1,
      horaDesde2: horaDesde2,
      horaHasta2: horaHasta2,
    };
    let listaHorariosNegocio = [horario];

    if (
      horariosNegocio !== undefined &&
      horariosNegocio.horarios !== undefined
    ) {
      listaHorariosNegocio = [...horariosNegocio.horarios, horario];
    }

    const newHorarios = {
      tiempoAtencion: tiempoAtencion,
      horarios: listaHorariosNegocio,
    };
    if (
      diaSemana > 0 &&
      horaDesde1 !== "" &&
      horaDesde2 !== "" &&
      horaHasta1 !== "" &&
      horaHasta2 !== ""
    )
      dispatch(setHorariosNegocio(newHorarios));
    setDiaSemana(0);
  };

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
            selectedValue={diaSemana}
            onValueChange={(e) => setDiaSemana(e)}
            iosIcon={
              <Icon
                name="arrow-down"
                style={{ color: "#ccc", marginRight: 0 }}
              />
            }
          >
            {diasSemanaDisponibles.map((dia) => {
              return (
                <Picker.Item key={dia.dia} label={dia.desc} value={dia.dia} />
              );
            })}
          </Picker>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={styles.labelText}>Hora Desde</Text>
            <Picker
              note
              mode="dropdown"
              style={styles.input}
              selectedValue={horaDesde1}
              onValueChange={(e) => setHoraDesde1(e)}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              {horarios.map((hora, index) => {
                return <Picker.Item key={index} label={hora} value={hora} />;
              })}
            </Picker>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.labelText}>Hora Hasta</Text>
              <Picker
                note
                mode="dropdown"
                style={styles.input}
                selectedValue={horaHasta1}
                onValueChange={(e) => setHoraHasta1(e)}
                iosIcon={
                  <Icon
                    name="arrow-down"
                    style={{ color: "#ccc", marginRight: 0 }}
                  />
                }
              >
                {horarios.map((hora, index) => {
                  return <Picker.Item key={index} label={hora} value={hora} />;
                })}
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
              selectedValue={horaDesde2}
              onValueChange={(e) => setHoraDesde2(e)}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              {horarios.map((hora, index) => {
                return <Picker.Item key={index} label={hora} value={hora} />;
              })}
            </Picker>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.labelText}>Hora Hasta</Text>
              <Picker
                note
                mode="dropdown"
                style={styles.input}
                selectedValue={horaHasta2}
                onValueChange={(e) => setHoraHasta2(e)}
                iosIcon={
                  <Icon
                    name="arrow-down"
                    style={{ color: "#ccc", marginRight: 0 }}
                  />
                }
              >
                {horarios.map((hora, index) => {
                  return <Picker.Item key={index} label={hora} value={hora} />;
                })}
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
          <TouchableOpacity onPress={agregarHorario}>
            <View
              style={{
                backgroundColor: "#0fc224",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff" }}>Añadir Horario</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        {horariosNegocio.horarios !== undefined &&
        horariosNegocio.horarios.length > 0 ? (
          <Button
            title="Continuar"
            style={{ alignItems: "center" }}
            onPress={() => props.navigation.navigate("Turnos")}
          ></Button>
        ) : (
          <></>
        )}
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