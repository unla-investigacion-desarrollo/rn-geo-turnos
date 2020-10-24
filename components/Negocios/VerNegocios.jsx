import React, { useState} from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView from "react-native-maps";
import InformacionNegocio from "./InformacionNegocio";
import Filter from "./Filter";
import { selectMarker } from "../../actions/selectMarkerActions";
import { actions } from "../../actions/types";
import ImageMarker from "./ImageMarker";


export default function VerNegocios(props) {
  const region = useSelector((state) => state.center_map.region); //Centro del mapa
  const lista_negocios = useSelector((state) => state.lista_negocios.negocios); //Lista de negocios cercanos
  const filterNegocio = useSelector((state) => state.filterNegocio);
  const [strokeColor, setStrokeColor] = useState("#1a66ff");
  const [fillColor, setFillColor] = useState("rgba(219, 231, 255, 0.38)");
 
  const showInfoNegocio = useSelector(
    (state) => state.lista_negocios.showInfoNegocio
  ); //Lista de negocios cercanos
  const dispatch = useDispatch();


  const setShowInfoNegocio = (mostrar) => {
    dispatch({ type: actions.SHOW_INFO_NEGOCIOS, payload: mostrar });
  };
  
  const seleccionarMarker = (marker) => {
    //Selecciono marcador dentro del mapa
    setShowInfoNegocio(true);
    dispatch(
      selectMarker(
       marker
      )
    );
  };

  const marcarNegocios = () => {
    //Genero los MARKERS de los negocios cercanos

    {
      return lista_negocios.map((marker, index) => (
        <MapView.Marker
          key={index}
          onPress={() =>
            seleccionarMarker(marker)
          }
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
        >
        
        <ImageMarker imageColor={marker.nroColor}/>
          
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
          showsUserLocation={true}
          showsPointsOfInterest={false}
          showsIndoors={false}
          showsIndoorLevelPicker={false}
          showsTraffic={false}
          loadingEnabled={true}
          showsMyLocationButton={false}
          region={{
            latitude: region.latitude, //Marco el centro del mapa con la ubicacion del usuario
            longitude: region.longitude,
            latitudeDelta: parseFloat(filterNegocio.km)*0.05/2,
            longitudeDelta: parseFloat(filterNegocio.km)*0.05/2,
          }}
        
        >
          <MapView.Circle
                center =  {{latitude:parseFloat(region.latitude), longitude:parseFloat(region.longitude)}}
                radius = { filterNegocio.km*1000 }
                strokeWidth = { 1 }
                strokeColor = {strokeColor}
                fillColor = {fillColor}
        />
          {marcarNegocios()}
        </MapView>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          width: 68,
          paddingLeft: 8,
          paddingRight: 8,
          zIndex: 1,
          marginTop: 35,
          marginLeft: 10, 
        }}
      >
        <Filter />
      </View>
      <View style={{ flex: 1 }}>{createMap()}</View>

      {showInfoNegocio && (
        <View
          style={{
            backgroundColor: "#fff",
            height: "30%",
            borderRadius: 10,
            borderColor: "#ddd",
            borderWidth: 1,
            bottom: 10,
            width: "100%",
            position: "absolute",
            paddingTop: 10,
          }}
        >
          <InformacionNegocio navigation={props.navigation} />
        </View>
      )}
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
