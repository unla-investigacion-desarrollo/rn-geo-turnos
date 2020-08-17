import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistroDni from "./RegistroDni";
import RegistroDatosPersonales from "./RegistroDatosPersonales";
import RegistroUbicacion from "./RegistroUbicacion";
import Ingreso from "./Ingreso";
import QrReader from "../QR/QrReader";
export default function Login(props) {
  const Stack = createStackNavigator();

  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Ingreso" component={Ingreso}></Stack.Screen>
        <Stack.Screen
          name="Registro DNI"
          component={RegistroDni}
        ></Stack.Screen>
        <Stack.Screen
          name="Datos Personales"
          component={RegistroDatosPersonales}
        ></Stack.Screen>
        <Stack.Screen
          name="Ubicación"
          component={RegistroUbicacion}
        ></Stack.Screen>
        <Stack.Screen name="Cámara" component={QrReader}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
