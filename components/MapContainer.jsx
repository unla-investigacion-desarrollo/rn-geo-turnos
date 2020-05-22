import React from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import MapInput from "./MapInput";
import MyMapView from "./MapView";
import { useSelector, useDispatch } from "react-redux";
import { addNegocio } from "../actions/negociosListActions";

const MapContainer = (props) => {
  const region = useSelector((state) => state.center_map.region);
  const negocio = useSelector((state) => state.negocio_reducer.negocio);
  const dispatch = useDispatch();
  const agregarNegocio = () => {
    dispatch(addNegocio(negocio));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 12 }}>
        <View style={{ position: "absolute", width: "100%", zIndex: 100 }}>
          <MapInput />
        </View>

        {region.latitude ? (
          <View style={{ flex: 9 }}>
            <MyMapView />
          </View>
        ) : null}
      </View>
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
        <Text style={{ fontSize: 20, textAlign: "center" }}>Dirección</Text>
        <View>
          <Text style={styles.text}>{negocio.direccion}</Text>
        </View>
        <View>
          <Button
            title="Confirmar Dirección"
            color="#007aff"
            onPress={agregarNegocio}
          />
        </View>
      </View>
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

    elevation: 5,
  },
  text: {
    height: 50,
    paddingTop: 20,
    textAlign: "center",
  },
});
export default MapContainer;
