import React from "react";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";

export default function MarkUbicacion(props) {
  const negocio = useSelector((state) => state.nuevoNegocio.dataNegocio);
  const region = useSelector((state) => state.center_map.region); //Centro del mapa

  return (
    <MapView
      style={{ flex: 1 }}
      provider={MapView.PROVIDER_GOOGLE}
      region={{
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }}
    ></MapView>
  );
}
