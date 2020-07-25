import React from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView from "react-native-maps";
import InformacionNegocio from "./InformacionNegocio";
import { selectMarker } from "../../actions/selectMarkerActions";

export default function VerNegocios() {
  const region = useSelector((state) => state.center_map.region); //Centro del mapa
  const lista_negocios = useSelector((state) => state.lista_negocios.negocios); //Lista de negocios cercanos
  const dispatch = useDispatch();

  const seleccionarMarker = (lat, longitud, direccion) => {
    //Selecciono marcador dentro del mapa
    dispatch(
      selectMarker({
        latitude: lat,
        longitude: longitud,
        direccion: direccion,
      })
    );
  };

  const marcarNegocios = () => {
    //Genero los MARKERS de los negocios cercanos
    {
      return lista_negocios.map((marker, index) => (
        <MapView.Marker
          key={index}
          onPress={() =>
            seleccionarMarker(
              marker.latitude,
              marker.longitude,
              marker.direccion
            )
          }
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.direccion}
        >
          <Image
            source={require("../assets/marcador-verde.png")}
            style={{ height: 35, width: 35 }}
          />
        </MapView.Marker>
      ));
    }
  };

  const createMap = () => {
    //Creo el mapa donde se van a mostrar los marcadores
    if (region.latitude) {
      return (
        <MapView
          style={{ flex: 1 }}
          provider={MapView.PROVIDER_GOOGLE}
          region={{
            latitude: region.latitude, //Marco el centro del mapa con la ubicacion del usuario
            longitude: region.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
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
