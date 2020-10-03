import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiCalls } from "../../api/apiCalls";
import { actions } from "../../actions/types";
import RegistroDatosPersonales from "./RegistroDatosPersonales";
import { setRegisterData } from "../../actions/RegisterActions";
import { PickerIOS } from "@react-native-community/picker";

export default function Register(props) {
  const access = useSelector((state) => state.access);

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
            calle: response.data.ubicacion.calle,
            numero: response.data.ubicacion.numero,
            piso: response.data.ubicacion.piso,
            departamento: response.data.ubicacion.departamento,
            provincia: response.data.ubicacion.localidad.provincia.idProvincia,
            localidad: response.data.ubicacion.localidad.idLocalidad,
          };

          dispatch(setRegisterData(registerData));
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
    }
  }, []);

  return (
    <RegistroDatosPersonales
      isConfig={isConfig}
      navigation={props.navigation}
    />
  );
}
