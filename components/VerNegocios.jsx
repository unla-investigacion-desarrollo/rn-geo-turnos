import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView from "react-native-maps";
import InformacionNegocio from "./InformacionNegocio";
import { centerMap } from "../actions/centerMapActions";

export default function VerNegocios() {
  const region = useSelector((state) => state.center_map.region);
  const lista_negocios = useSelector((state) => state.lista_negocios.negocios);
  const dispatch = useDispatch();
  const [info_negocio, setInfoNegocio] = useState("");
  const [latitud_negocio, setLatitudNegocio] = useState(0);
  const [longitud_negocio, setLongitudNegocio] = useState(0);

  const selectMarker = (lat, longitud, title) => {
    dispatch(
      centerMap({
        latitude: lat,
        longitude: longitud,
      })
    );
    setLongitudNegocio(longitud);
  };

  const posicionesRandom = () => {
    return [
      {
        latitude: -34.60381,
        longitude: -58.381774,
        title: "Obeliso de Buenos Aires",
      },
      { latitude: 20, longitude: -40, title: "2" },
      { latitude: 45, longitude: 50, title: "3" },
    ];
  };

  const marcarNegocios = () => {
    {
      return lista_negocios.map((marker, index) => (
        <MapView.Marker
          key={index}
          onPress={() =>
            selectMarker(marker.latitude, marker.longitude, marker.direccion)
          }
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.direccion}
        ></MapView.Marker>
      ));
    }
  };

  const createMap = () => {
    if (region.latitude) {
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
          showsUserLocation={true}
        >
          {marcarNegocios()}
        </MapView>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{createMap()}</View>
      <View
        style={{
          backgroundColor: "#fff",
          height: "20%",
          borderRadius: 10,
          borderColor: "#ddd",
          borderWidth: 1,
          bottom: 10,
          width: "100%",
          position: "absolute",
          paddingTop: 10,
        }}
      >
        <InformacionNegocio />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
