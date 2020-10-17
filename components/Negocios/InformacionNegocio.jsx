import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapMarkerAlt,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { routeDirection } from "../../services/location-service";
import { actions } from "../../actions/types";

export default function InformacionNegocio(props) {
  const dispatch = useDispatch();
  const marcador_seleccionado = useSelector(
    (state) => state.marker_seleccionado.marcador_seleccionado //Marker del local que seleccione para obtener su informacion
  );
  const setShowInfoNegocio = (mostrar) => {
    dispatch({ type: actions.SHOW_INFO_NEGOCIOS, payload: mostrar });
  };
  const infoTurno = () => {
    props.navigation.navigate("Reservar turno");
  };

  const textoDireccion = () =>{

    const piso = (marcador_seleccionado.ubicacion.piso>0?"Piso "+marcador_seleccionado.ubicacion.piso:"")
    const departamento = (marcador_seleccionado.ubicacion.departamento!==null && marcador_seleccionado.ubicacion.departamento!==""?"Depto "+marcador_seleccionado.ubicacion.departamento:"")
    const direccion = marcador_seleccionado.ubicacion.calle + " " + marcador_seleccionado.ubicacion.numero+", "+marcador_seleccionado.ubicacion.localidad.nombre+" "+piso+" "+departamento;

    return direccion;
  }

  return (
    <>
  
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 20, textAlign: "center", width: "90%" }}>
          {marcador_seleccionado.name}
        </Text>
        <TouchableOpacity
          style={{ width: "10%" }}
          onPress={() => setShowInfoNegocio(false)}
        >
          <FontAwesomeIcon icon={faTimesCircle} size={20} color={"#ccc"} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderWidth: 2,
          borderColor: "#34d057",
          margin: 10,
          marginLeft: 30,
          marginRight: 30,
        }}
      ></View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          margin: 8,
          height: 50,
          padding: 8,
          borderRadius: 5,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "row" }}
          onPress={() =>
            routeDirection(
              marcador_seleccionado.latitude,
              marcador_seleccionado.longitude
            )
          }
        >
          <Text
            style={{
              flex: 8,
              height: 30,
              top: "2%",
              width: "100%",
            }}
          >
            {textoDireccion()}
          </Text>

          <FontAwesomeIcon
            stlye={{ flex: 2 }}
            icon={faMapMarkerAlt}
            size={30}
            color={"red"}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: "row", marginTop: "5%" }}>
       {marcador_seleccionado.usaTurnos &&
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{ textAlign: "center" }} onPress={infoTurno}>
            <Text style={styles.confirm_button}>Reservar Turno</Text>
          </TouchableOpacity>
        </View>}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  confirm_button: {
    width: "100%",
    color: "#007aff",
    fontSize: 18,
    top: "50%",
    textAlign: "center",
  },
});
