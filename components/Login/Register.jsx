import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiCalls } from "../../api/apiCalls";
import { View } from "react-native";
import { actions } from "../../actions/types";
import RegistroDatosPersonales from "./RegistroDatosPersonales";
import { setRegisterData } from "../../actions/RegisterActions";
import { PickerIOS } from "@react-native-community/picker";

export default function Register(props) {
  const access = useSelector((state) => state.access);
  const [loadPage, setLoadPage] = React.useState(false);
  const dispatch = useDispatch();

  const isConfig = props?.route?.params?.source === "config";

  useEffect(() => {
    if (isConfig) {
      apiCalls
        .getInfoUsuario(access.idPersona, access.token)
        .then((response) => {
          const registerData = {
            nombre: response.data.nombre,
            apellido: response.data.apellido,
            cuil: response.data.cuil,
            celular: response.data.celular,
            email: response.data.login.email,
            sexo: response.data.sexo,
            latitude: response.data.ubicacion.latitud,
            longitude: response.data.ubicacion.longitud,
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
          dispatch(setRegisterData(registerData));
          setLoadPage(true);
        })
        .catch((code, message) => {
          dispatch({
            type: actions.TOAST,
            payload: {
              message: "Error al traer la informacion del usuario",
              type: "error",
              visibilityTime: 3000,
            },
          });
        });
    }else{
      setLoadPage(true);
    }
  }, []);

  return (
    <>
      {loadPage && (
        <RegistroDatosPersonales
          isConfig={isConfig}
          navigation={props.navigation}
        />
      )}
    </>
  );
}
