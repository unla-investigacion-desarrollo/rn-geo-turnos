import React, { useEffect, useState } from "react";
import CardHorario from "./CardHorario";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ListaHorarios() {
  const horariosNegocio = useSelector((state) => state.nuevoNegocio.horarios);

  useEffect(() => {
    if (horariosNegocio.horarios !== undefined) {
      horariosNegocio.horarios.sort((a, b) => {
        if (a.diaSemana > b.diaSemana) {
          return 1;
        }
        if (a.diaSemana < b.diaSemana) {
          return -1;
        }

        return 0;
      });
    }
  }, [horariosNegocio]);

  return (
    <>
      {horariosNegocio.horarios !== undefined &&
      horariosNegocio.horarios.length > 0 ? (
        horariosNegocio.horarios.map((horario, index) => {
          return <CardHorario key={index} horarioNegocio={horario} />;
        })
      ) : (
        <View style={styles.containerSinHorarios}>
          <Text style={styles.textSinHorarios}>SIN HORARIOS REGISTRADOS</Text>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  containerSinHorarios: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
  },
  textSinHorarios: {
    textAlign: "center",
    color: "#fff",
  },
});
