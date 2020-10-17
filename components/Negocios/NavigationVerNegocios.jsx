import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TurnosNegocio from "./TurnosNegocio";
import VerNegocios from "./VerNegocios";
import { getNegocios } from "./FunctionNegocios";
import { useDispatch, useSelector } from "react-redux";
import {filterNegocioDistance} from "../../Utils/constantes"
import {getLocation} from "../../services/location-service"
import {centerMap, centerMapToSetted} from "../../actions/centerMapActions"


export default function NavigationVerNegocios() {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const access = useSelector((state) => state.access);
  const filterNegocio = useSelector((state) => state.filterNegocio);
    const center_map = useSelector((state) => state.center_map.region); //Centro del mapa


  useEffect(() => {
    // setUserPosition()
    getNegocios(dispatch, 0,filterNegocio.km,center_map.latitude,center_map.longitude,access.token );
  });


  // const setUserPosition = () => {
  //   getLocation().then((data) => {
  //     dispatch(
  //       centerMap({
  //         latitude: data.latitude,
  //         longitude: data.longitude,
  //         direccion: "",
  //       })
  //     );
  //   }).catch((err) =>{
  //     dispatch(centerMapToSetted());
  //   })

  //   ;
  // };
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Negocios cercanos"
          component={VerNegocios}
            options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}
        ></Stack.Screen>

        <Stack.Screen
          name="Reservar turno"
          component={TurnosNegocio}
           options={{headerBackTitleVisible:false,headerTitleAlign: "center"}}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{createHomeStack()}</NavigationContainer>;
}
