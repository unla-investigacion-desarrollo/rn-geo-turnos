import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Configuraciones from "./Configuraciones";
import ConfiguracionDelNegocio from "./ConfiguracionDelNegocio";
import MisTurnos from "./MisTurnos";
import RegistroUbicacion from "../Login/RegistroUbicacion";
import RegistroDatosPersonales from "../Login/RegistroDatosPersonales";

export default function UserConfigNavigation() {
  const Stack = createStackNavigator();
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Configuración"
          component={Configuraciones}
        ></Stack.Screen>

        <Stack.Screen
          name="Datos personales"
          component={RegistroDatosPersonales}
        ></Stack.Screen>

        <Stack.Screen
          name="Ubicación"
          component={RegistroUbicacion}
        ></Stack.Screen>

        <Stack.Screen
          name="Configuración del negocio"
          component={ConfiguracionDelNegocio}
        ></Stack.Screen>

        <Stack.Screen name="Mis turnos" component={MisTurnos}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
