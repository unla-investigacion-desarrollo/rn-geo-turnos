import React from "react";
import MapContainer from "./MapContainer";
import MapInput from "./MapInput";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DatosNegocio from "./DatosNegocio";
import HorariosNegocio from "./HorariosNegocio";
import TurnosNegocio from "./TurnosNegocio";

export default function NuevoNegocio() {
  const Stack = createStackNavigator();
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Información"
          component={DatosNegocio}
        ></Stack.Screen>
        <Stack.Screen
          name="Ubicación Negocio"
          component={MapContainer}
        ></Stack.Screen>
        <Stack.Screen
          name="Horarios Negocio"
          component={HorariosNegocio}
        ></Stack.Screen>
        <Stack.Screen
          name="Turnos Negocio"
          component={TurnosNegocio}
        ></Stack.Screen>

        <Stack.Screen
          name="MapInput Negocio"
          component={MapInput}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
