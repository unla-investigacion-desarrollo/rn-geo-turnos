import React from "react";
import {
  Text,
  Button,
  Linking,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Reserva from "./Reserva";


export default function InformacionNegocio(props) {
  const marcador_seleccionado = useSelector(
    (state) => state.marker_seleccionado.marcador_seleccionado //Marker del local que seleccione para obtener su informacion
  );

  const routeDirection = (lat, longitud) => {
    //Funcion que permite redirigir a google maps/maps
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = lat + "," + longitud;
    const label = "Custom Label";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        {marcador_seleccionado.name}
      </Text>

      <View
        style={{
          borderWidth: 2,
          borderColor: "#34d057",
          margin: 10,
          marginLeft: 30,
          marginRight: 30,
        }}
      ></View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          margin: 8,
          height: 50,
          padding: 8,
          borderRadius: 5,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row" }}
          onPress={() =>
            routeDirection(
              marcador_seleccionado.latitude,
              marcador_seleccionado.longitude
            )
          }
        >
          <Text
            style={{
              flex: 8,
              height: 30,
              top: "2%",
              width: "100%",
            }}
          >
            {marcador_seleccionado.direccion}
          </Text>

          <FontAwesomeIcon
            stlye={{ flex: 2 }}
            icon={faMapMarkerAlt}
            size={30}
            color={"red"}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: "row", marginTop: "5%" }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ textAlign: "center" }}>
            <Button title={"Realizar Pedido"} style={styles.confirm_button} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Reserva navigation={props.navigation} />

        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  confirm_button: {
    width: "100%",
    color: "#007aff",
    fontSize: 18,
    top: "50%",
  },
});
