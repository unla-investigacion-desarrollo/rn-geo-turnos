import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Configuraciones from "./Configuraciones";
import Turnos from "./Turnos";
import RegistroUbicacion from "../Login/RegistroUbicacion";
import Register from "../Login/Register";
import DatosNegocio from "../NuevoNegocio/DatosNegocio";
import HorariosNegocio from "../NuevoNegocio/HorariosNegocio";
import MapContainer from "../NuevoNegocio/MapContainer";
import MapInput from "../NuevoNegocio/MapInput";
import TurnosNegocio from "../NuevoNegocio/TurnosNegocio";
import NuevoNegocio from "../NuevoNegocio/NuevoNegocio";

import QrEmprendimiento from "../Negocios/QrEmprendimiento";

export default function UserConfigNavigation() {
  const Stack = createStackNavigator();
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Configuración"
          component={Configuraciones}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>

        <Stack.Screen
          name="Datos personales"
          component={Register}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>

        <Stack.Screen
          name="Ubicación"
          component={RegistroUbicacion}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>
        <Stack.Screen name="PDF" component={QrEmprendimiento} options={{headerBackTitleVisible:false}}></Stack.Screen>
        <Stack.Screen
          name="Información Negocio"
          component={DatosNegocio}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>
        <Stack.Screen
          name="Ubicación Negocio"
          component={MapContainer}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>
        <Stack.Screen
          name="Horarios Negocio"
          component={HorariosNegocio}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>
        <Stack.Screen
          name="MapInput Negocio"
          component={MapInput}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>
        <Stack.Screen
          name="Nuevo negocio"
          component={DatosNegocio}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>
           <Stack.Screen
          name="Turnos Negocio"
          component={TurnosNegocio}
          options={{headerBackTitleVisible:false}}
        ></Stack.Screen>

        {/* FIN NEGOCIO */}

        <Stack.Screen name="Turnos" component={Turnos} options={{headerBackTitleVisible:false}}></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
