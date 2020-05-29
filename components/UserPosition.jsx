import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { api_key } from "../services/api_map";
import UserPositionMap from "./UserPositionMap";
import { configureCenterMap } from "../actions/centerMapActions";

export default function UserPosition() {
  const [direccion, setDireccion] = useState("");
  const center_map = useSelector((state) => state.center_map.region);
  const [direccion_google, setDireccionGoogle] = useState("");

  useEffect(() => {
    setDireccionGoogle(center_map);
  }, [center_map]);

  const dispatch = useDispatch();

  const searchChange = () => {
    if (direccion !== "") {
      const url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
      const key = api_key;

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

            setDireccionGoogle({
              latitude: responseJson.results[0].geometry.location.lat,
              longitude: responseJson.results[0].geometry.location.lng,
              direccion: direccion_completa,
            });
          }
        });
    }
  };
  const setCenter = () => {
    dispatch(configureCenterMap(direccion_google));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1A73E8" }}>
      <View style={{ flex: 2 }}>
        <Text style={styles.text_desc}>
          Esta aplicación respeta tu privacidad por lo que no te pedirá permisos
          de ubicación, sin embargo necesitamos una dirección aproximada de
          donde te encuentras
        </Text>

        <TextInput
          placeholder={"Buscar mi posición..."}
          style={styles.input}
          value={direccion}
          onChangeText={(searchtext) => setDireccion(searchtext)}
          onSubmitEditing={searchChange}
          returnKeyType="search"
          clearButtonMode="always"
        ></TextInput>
      </View>
      <View style={{ flex: 3, backgroundColor: "white" }}>
        {direccion_google.latitude ? (
          <>
            <View
              style={{
                flex: 5,
                margin: 10,
                borderRadius: 10,
              }}
            >
              <UserPositionMap direccion_google={direccion_google} />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title={"Confirmar Dirección"}
                onPress={setCenter}
                style={styles.confirm_button}
              />
            </View>
          </>
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 50,

    elevation: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginTop: 35,
    margin: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  confirm_button: {
    width: "100%",
    color: "#007aff",
    fontSize: 18,
    top: "50%",
    marginLeft: 5,
    marginRight: 5,
  },
  text_desc: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    fontSize: 17,
    lineHeight: 25,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
