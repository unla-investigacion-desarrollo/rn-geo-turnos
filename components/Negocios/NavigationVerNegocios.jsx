import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TurnosNegocio from "./TurnosNegocio";
import VerNegocios from "./VerNegocios"

export default function NavigationVerNegocios() {
  const Stack = createStackNavigator();
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Negocios cercanos" component={VerNegocios}></Stack.Screen>

        <Stack.Screen name="Reservar turno" component={TurnosNegocio}></Stack.Screen>
        
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
