import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiCalls } from "../../api/apiCalls";
import { actions } from "../../actions/types";
import FormUbicacion from "./FormUbicacion";
import { setRegisterData } from "../../actions/RegisterActions";
import { PickerIOS } from "@react-native-community/picker";

export default function RegistroUbicacion(props) {
  const access = useSelector((state) => state.access);

  const dispatch = useDispatch();

  const isConfig = props?.route?.params?.source === "config";

  useEffect(() => {
    console.log(isConfig);
    if (isConfig) {
      apiCalls
        .getInfoUsuario(access.idPersona, access.token)
        .then((response) => {
          let registroObject = {
            latitude: response.data.ubicacion.latitud,
            longitude: response.data.ubicacion.longitude,
            calle: response.data.ubicacion.calle,
            numero: response.data.ubicacion.numero.toString(),
            piso:
              response.data.ubicacion.piso > 0
                ? response.data.ubicacion.piso.toString()
                : "",
            depto: response.data.ubicacion.departamento,
            localidad: response.data.ubicacion.localidad.idLocalidad,
            provincia: response.data.ubicacion.localidad.provincia.idProvincia,
          };
          dispatch(setRegisterData(registroObject));
        })
        .catch((code, message) => {
          dispatch({
            type: actions.TOAST,
            payload: {
              message: "Error al traer la informacion de la ubicación",
              type: "error",
              visibilityTime: 5000,
            },
          });
        });
    }
  }, []);

  return <FormUbicacion isConfig={isConfig} navigation={props.navigation} />;
}
