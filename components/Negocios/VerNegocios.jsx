import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView from "react-native-maps";
import InformacionNegocio from "./InformacionNegocio";
import Filter from "./Filter";
import { selectMarker } from "../../actions/selectMarkerActions";
import { addNegocios } from "../../actions/negociosListActions";
import { actions } from "../../actions/types";
import { apiCalls } from "../../api/apiCalls";
import { showToast } from "../../actions/toastActions"


export default function VerNegocios(props) {
  const region = useSelector((state) => state.center_map.region); //Centro del mapa
  const lista_negocios = useSelector((state) => state.lista_negocios.negocios); //Lista de negocios cercanos

  const showInfoNegocio = useSelector(
    (state) => state.lista_negocios.showInfoNegocio
  ); //Lista de negocios cercanos
  const dispatch = useDispatch();

  const setShowInfoNegocio = (mostrar) => {
    dispatch({ type: actions.SHOW_INFO_NEGOCIOS, payload: mostrar });
  };

  const seleccionarMarker = (lat, longitud, calle, numero, id, name) => {
    //Selecciono marcador dentro del mapa
    setShowInfoNegocio(true);
    dispatch(
      selectMarker({
        latitude: lat,
        longitude: longitud,
        calle: calle,
        numero: numero,
        id: id,
        name: name,
      })
    );
  };

  useEffect(() => {
    getNegocios()
    
  }, []);



  const getNegocios = () => {
    
    apiCalls
        .getEmprendimientos()
        .then((response) => {
          let negocios = response.data
          if (negocios.length > 0){
            negocios.forEach(n => {
              n.latitude = parseFloat(n.ubicacion.latitud)
              n.longitude = parseFloat(n.ubicacion.longitud)
              n.calle = n.ubicacion.calle
              n.numero = n.ubicacion.numero
              n.name = n.nombre
              n.idEmprendimiento = n.idEmprendimiento
              
            })
            dispatch(addNegocios(negocios));
            // dispatch(showToast({text1: "traje negoicos", text2:"piola", type:"success", visibilityTime:20000}))
          }else{
            //Toast type: info, text1: 'No se encontraron negocios con esos parametros'
          }
          
        }).catch((code,message) =>{
        });
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
              marker.calle,
              marker.numero,
              marker.idEmprendimiento,
              marker.name
            )
          }
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
        >
          <Image
            source={require("../../assets/marcador-verde.png")}
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
      <View
        style={{
          position: "absolute",
          width: "100%",
          paddingLeft: 8,
          paddingRight: 8,
          zIndex: 1,
          elevation: 2,
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
