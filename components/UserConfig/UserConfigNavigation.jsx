import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Configuraciones from "./Configuraciones"
import DatosPersonales from "./DatosPersonales"
import UserPosition from "../UserPosition/UserPosition";
import ConfiguracionDelNegocio from "./ConfiguracionDelNegocio"
import MisTurnos from "./MisTurnos"

export default function UserConfigNavigation() {
  const Stack = createStackNavigator();
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Configuracion de usuario" component={Configuraciones}></Stack.Screen>

        <Stack.Screen name="Datos personales" component={DatosPersonales}></Stack.Screen>

        <Stack.Screen name="Ubicación" component={UserPosition}></Stack.Screen>

        <Stack.Screen name="Configuración del negocio" component={ConfiguracionDelNegocio}></Stack.Screen>

        <Stack.Screen name="Mis turnos" component={MisTurnos}></Stack.Screen>

        
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
