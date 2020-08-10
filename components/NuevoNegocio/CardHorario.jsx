import React, { useState, useEffect } from "react";
import { Card, CardItem, Body, Text, Icon } from "native-base";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { dias } from "../../Utils/constantes";
import { useDispatch, useSelector } from "react-redux";
import { setHorariosNegocio } from "../../actions/NuevoNegocioActions";

export default function CardExample({ horarioNegocio }) {
  const [diaSemana, setDiaSemana] = useState(0);
  const horariosNegocio = useSelector((state) => state.nuevoNegocio.horarios);
  const dispatch = useDispatch();

  useEffect(() => {
    const dia = dias.find((dia) => dia.dia === horarioNegocio.diaSemana);
    setDiaSemana(dia.desc);
  });

  const deleteHorario = () => {
    const arrayHorarios = horariosNegocio.horarios.filter(
      (horario) => horario.diaSemana !== horarioNegocio.diaSemana
    );

    const horario = {
      tiempoAtencion: horariosNegocio.tiempoAtencion,
      horarios: arrayHorarios,
    };

    dispatch(setHorariosNegocio(horario));
  };

  return (
    <Card style={styles.cardContainer}>
      <CardItem>
        <Body>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 4 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", color: "#777a7e" }}>
                  {diaSemana}:
                </Text>
                <Text
                  style={{
                    color: "#c3c3c3",
                    fontSize: 10,
                    paddingLeft: 5,
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  {horarioNegocio.horaDesde1}hs a {horarioNegocio.horaHasta1}hs
                  -{horarioNegocio.horaDesde2}hs a {horarioNegocio.horaHasta2}hs
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={deleteHorario}>
                <Icon
                  name="close"
                  style={{
                    color: "#ccc",
                    fontSize: 18,
                    textAlign: "right",
                    marginRight: 0,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
});
