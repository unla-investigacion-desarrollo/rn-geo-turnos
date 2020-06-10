import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { addNegocio } from "../actions/negociosListActions";

function ConfirmDireccion(props) {
  const negocio = useSelector((state) => state.negocio_reducer.negocio); //Negocio que se esta queriendo dar de alta
  const dispatch = useDispatch();
  const agregarNegocio = () => {
    dispatch(addNegocio(negocio)); //Se agrega el negocio a la lista de negocios de la aplicacion
  };

  return (
    <>
      {negocio.latitude ? (
        <View style={styles.container_confirmDireccion}>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>{negocio.direccion}</Text>
          </View>
          <View style={styles.container_button}>
            <Button
              title={"Confirmar Dirección"}
              onPress={agregarNegocio}
              style={styles.confirm_button}
            />
          </View>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  direccionText: {
    fontSize: 20,
    textAlign: "center",
    height: 30,
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
  },
  confirm_button: {
    width: "100%",
    color: "#007aff",
    fontSize: 18,
    top: "50%",
  },
  container_confirmDireccion: {
    backgroundColor: "#fff",
    height: "20%",
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    bottom: 10,
    width: "100%",
    position: "absolute",
    paddingTop: 10,
    elevation: 5,
    borderRadius: 20,
    flex: 1,
  },
  container_button: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
  },
});
export default ConfirmDireccion;
