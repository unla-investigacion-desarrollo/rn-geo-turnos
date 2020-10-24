import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Turnos from '../Turnos'

export default function TurnosNavigation() {
  const Stack = createStackNavigator();
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Turnos"
          component={Turnos}
          options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}

        ></Stack.Screen>

      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
