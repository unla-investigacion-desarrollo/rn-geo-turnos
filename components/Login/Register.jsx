import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { apiCalls } from "../../api/apiCalls";
import { actions } from "../../actions/types";
import RegistroDatosPersonales from "./RegistroDatosPersonales";

export default function Register(props) {
  const access = useSelector((state) => state.access);

  const dispatch = useDispatch();

  const isConfig = props?.route?.params?.source === "config";

  useEffect(() => {
    if (isConfig) {
      apiCalls
        .getInfoUsuario(access.idPersona)
        .then((response) => {
          setNombre(response.data.nombre);
          setApellido(response.data.apellido);
          setCuil(response.data.cuil);
          setCelular(response.data.celular);
          setEmail(response.data.login.email);
          setSexo(respoonsa.data.sexo);
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

  return <RegistroDatosPersonales isConfig={isConfig} />;
}
