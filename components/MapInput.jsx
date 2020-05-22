import React, { useState } from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { newNegocio } from "../actions/newNegocioActions";

import { useDispatch } from "react-redux";

function MapInput(props) {
  const [direccion, setDireccion] = useState("");

  const dispatch = useDispatch();

  const searchChange = () => {
    if (direccion !== "") {
      const url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
      const key = "AIzaSyDKkEy2Yhsr1EYiT33qI2sIizOfmxZ4GE0";

      let address = direccion.replace(/\s/g, "+");
      address = address + "+argentina";

      let key_url = "&key=" + key;

      console.log(url + address + key_url);

      fetch(url + address + key_url)
        .then((response) => response.json())
        .then((responseJson) => {
          //Seteo la latitud y longitud del negocio en REDUX para recargar el mapa
          if (responseJson.results[0].geometry.location.lat !== null) {
            let direccion_completa =
              responseJson.results[0].address_components[1].short_name +
              " " +
              responseJson.results[0].address_components[0].short_name +
              ", " +
              responseJson.results[0].address_components[2].short_name +
              ", " +
              responseJson.results[0].address_components[3].short_name;

            dispatch(
              newNegocio({
                latitude: responseJson.results[0].geometry.location.lat,
                longitude: responseJson.results[0].geometry.location.lng,
                direccion: direccion_completa,
              })
            );
          }
        });
    }
  };

  return (
    <>
      <TextInput
        placeholder={"Buscar Lugar..."}
        style={styles.input}
        value={direccion}
        onTouchStart={() => console.log("PEPEPE")}
        onChangeText={(searchtext) => setDireccion(searchtext)}
        onSubmitEditing={searchChange}
        returnKeyType="search"
        clearButtonMode="always"
      ></TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    top: "10%",
    elevation: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginTop: 35,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
  },
});

export default MapInput;
