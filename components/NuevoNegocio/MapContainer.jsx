import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapInput from "./MapInput";
import MyMapView from "./MapView";
import { useSelector } from "react-redux";
import ConfirmDireccion from "./ConfirmDireccion";

const MapContainer = (props) => {
  const region = useSelector((state) => state.center_map.region); //Centro del mapa

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 12 }}>
        {region.latitude ? ( //Si el centro del mapa esta configurado, muestro le mapa
          <View style={{ flex: 9 }}>
            <MyMapView />
          </View>
        ) : null}
      </View>
      <>
        <ConfirmDireccion navigation={props.navigation} />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    margin: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default MapContainer;
