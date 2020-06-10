import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";

const MyMapView = (props) => {
  const negocio = useSelector((state) => state.negocio_reducer.negocio); //Marcador del negocio que estoy queriendo agregar
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
    >
      {negocio.latitude !== null && negocio.longitude !== null ? ( //Solo pongo el marcador si tengo una ubicacion
        <MapView.Marker
          coordinate={{
            latitude: negocio.latitude,
            longitude: negocio.longitude,
          }}
        ></MapView.Marker>
      ) : null}
    </MapView>
  );
};

export default MyMapView;
