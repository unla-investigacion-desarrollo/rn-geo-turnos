import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistroDni from "./RegistroDni";
import Register from "./Register";
import RegistroUbicacion from "./RegistroUbicacion";
import Ingreso from "./Ingreso";
import RestablecerPw from "./RestablecerPw";
import QrReader from "../QR/QrReader";

export default function Login(props) {
  const Stack = createStackNavigator();

  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Ingreso" component={Ingreso} options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}></Stack.Screen>
        <Stack.Screen
          name="Registro DNI"
          component={RegistroDni}
           options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}
        ></Stack.Screen>
        <Stack.Screen
          name="Datos Personales"
          component={Register}
           options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}
        ></Stack.Screen>
        <Stack.Screen
          name="Ubicación"
          component={RegistroUbicacion}
           options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}
        ></Stack.Screen>
        <Stack.Screen name="Cámara" component={QrReader}  options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}></Stack.Screen>
        <Stack.Screen
          name="Restablecer contraseña"
          component={RestablecerPw}
          options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
