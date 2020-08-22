import React from "react";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function MarkUbicacion(props) {
  const registro = useSelector((state) => state.registro);
  const region = useSelector((state) => state.center_map.region); //Centro del mapa

  return (
    <MapView
      style={{ flex: 1 }}
      provider={MapView.PROVIDER_GOOGLE}
      region={{
        latitude: registro.registerData.latitude? registro.registerData.latitude : -34.603773,
        longitude: registro.registerData.longitude ? registro.registerData.longitude : -58.381706,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }}
    >
      {registro.registerData.latitude !== 0 &&
      registro.registerData.longitude !== 0 ? (
        <MapView.Marker
          coordinate={{
            latitude: registro.registerData.latitude? registro.registerData.latitude : -34.603773,
            longitude: registro.registerData.longitude ? registro.registerData.longitude : -58.381706,
          }}
        ></MapView.Marker>
      ) : null}
    </MapView>
  );
}
