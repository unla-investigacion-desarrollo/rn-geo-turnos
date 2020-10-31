import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View,  Keyboard} from "react-native";
import TurnosNavigation from "../UserConfig/Turnos/TurnosNavegation";
import VerNegocios from "../Negocios/VerNegocios";
import NavigationVerNegocios from "../Negocios/NavigationVerNegocios";
import BottomMenu from "./BottomMenu";
import UserConfigNavigation from "../UserConfig/UserConfigNavigation";
import QrReader from "../QR/QrReader";
import {
  TURNOS,
  VER_NEGOCIOS,
  QR_READER,
  USER_CONFIG,
} from "../../actions/menuOptions";
import { centerMapToSetted, centerMap } from "../../actions/centerMapActions";
import { dataRead } from "../../actions/qrReaderActions";
import { getLocation } from "../../services/location-service"
import { actions } from "../../actions/types";

const RenderMenuSelected = ({ menu_option, center_map }) => {
  const dispatch = useDispatch();

  switch (menu_option) {
    case TURNOS:
      return <TurnosNavigation />; //Pantalla donde se inicia el proceso de alta de un negocio
      break;
    case VER_NEGOCIOS:
      return <NavigationVerNegocios />; //Pantalla donde se visualizan los negocios cercanos
      break;
    case USER_CONFIG:
      return <UserConfigNavigation />; //Pantalla donde se solicita la posicion del usuario
      break;
    case QR_READER:
      dispatch(dataRead([]));
      return <QrReader isEmprendimiento={true}/>; //Pantalla donde se realiaz la lectura del codigo QR
      break;
    default:
      return <VerNegocios />; //Por default la pantalla que se ve es la de negocios cercanos
      break;
  }
};

export default function Logged() {
  const menu_option = useSelector((state) => state.menu_option.menu_option); //Menu seleccionado
  const center_map = useSelector((state) => state.center_map.region); //Centro del mapa
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const dispatch = useDispatch(); //Cada vez que cambio de menu, centro el mapa en la posicion que el usuario configuro
  useEffect(() => {
    if (menu_option === VER_NEGOCIOS){
      setUserPosition()
    }else{
      dispatch(centerMapToSetted());
    }

     dispatch({ type: actions.SHOW_INFO_NEGOCIOS, payload: false });
  }, [menu_option]);


  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    // return () => {
    //   Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
    //   Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    // };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardOpen(true)
  };

  const _keyboardDidHide = () => {
    setKeyboardOpen(false)
  };


  //Sirve para solicitar los permisos y obtener la pisicion del usuario
  const setUserPosition = () => {
      getLocation().then((data) => {
        dispatch(
          centerMap({
            latitude: data.latitude,
            longitude: data.longitude,
            direccion: "",
          })
        );
      }).catch((err) =>{
        dispatch(centerMapToSetted());
      })

      ;
    };

  return (
    // <SafeAreaView style={{height:height}}>
      
      <View style={{ flex: 1 }}>
        <View style={{ flex: 20 }}>
          <RenderMenuSelected
            menu_option={menu_option}
            center_map={center_map}
          ></RenderMenuSelected>
        </View>
        {!keyboardOpen && <View style={{ flex: 2 }}>
          <BottomMenu />
        </View>}
      </View>

  );
}
