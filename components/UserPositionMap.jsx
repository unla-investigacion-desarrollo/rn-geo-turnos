import React from "react";
import { Image } from "react-native";
import MapView from "react-native-maps";

const UserPositionMap = (props) => {
  return (
    <MapView
      style={{ flex: 1, borderRadius: 10 }}
      provider={MapView.PROVIDER_GOOGLE}
      region={{
        latitude: props.direccion_google.latitude,
        longitude: props.direccion_google.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }}
      showsUserLocation={true}
    >
      {props.latitude !== null && props.longitude !== null ? (
        <MapView.Marker
          coordinate={{
            latitude: props.direccion_google.latitude,
            longitude: props.direccion_google.longitude,
          }}
        >
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/punto.png")}
          />
        </MapView.Marker>
      ) : null}
    </MapView>
  );
};

export default UserPositionMap;
