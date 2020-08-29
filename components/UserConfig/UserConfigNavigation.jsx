import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Configuraciones from "./Configuraciones";
import Turnos from "./Turnos";
import RegistroUbicacion from "../Login/RegistroUbicacion";
import RegistroDatosPersonales from "../Login/RegistroDatosPersonales";
import DatosNegocio from "../NuevoNegocio/DatosNegocio";
import HorariosNegocio from "../NuevoNegocio/HorariosNegocio";
import MapContainer from "../NuevoNegocio/MapContainer";
import MapInput from "../NuevoNegocio/MapInput";
import TurnosNegocio from "../NuevoNegocio/TurnosNegocio";
import Pdf from "../NuevoNegocio/Pdf"

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
          name="PDF"
          component={Pdf}
        ></Stack.Screen>
        {/* NEGOCIO */}
        <Stack.Screen
          name="Información Negocio"
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
        {/* FIN NEGOCIO */}

        <Stack.Screen name="Turnos" component={Turnos}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
