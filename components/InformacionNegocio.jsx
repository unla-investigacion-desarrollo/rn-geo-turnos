import React, { useState } from "react";
import { Text, TextInput, Linking, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
export default function InformacionNegocio() {
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
        Información Negocio
      </Text>
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
    </>
  );
}
