import React, { useState } from "react";
import { Text, TextInput, Image, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function InformacionNegocio() {
  const routeDirection = (lat, longitud) => {
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
    <View>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Información Negocio
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            height: 45,
            flex: 8,
            width: "100%",
          }}
          // value={info_negocio}
        />

        <TouchableOpacity
          stlye={{ flex: 2 }}
          /*onPress={() => routeDirection(latitud_negocio, longitud_negocio)}*/
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} size={40} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
