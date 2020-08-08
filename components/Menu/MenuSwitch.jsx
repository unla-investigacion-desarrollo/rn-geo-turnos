import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import NuevoNegocio from "../NuevoNegocio/NuevoNegocio";
import VerNegocios from "../Negocios/VerNegocios";
import ReservarTurno from "../Negocios/ReservarTurno";
import BottomMenu from "./BottomMenu";
import UserPosition from "../UserPosition/UserPosition";
import QrReader from "../QR/QrReader";
import {
  NUEVO_NEGOCIO,
  VER_NEGOCIOS,
  USER_POSITION,
  QR_READER,
} from "../../actions/menuOptions";
import { switchMenu } from "../../actions/menuSwitchActions";
import { centerMapToSetted } from "../../actions/centerMapActions";
import { dataRead } from "../../actions/qrReaderActions";

const RenderMenuSelected = ({ menu_option, center_map }) => {
  const dispatch = useDispatch();
  if (!center_map.latitude) {
    dispatch(switchMenu(USER_POSITION)); //Si no se cuenta con una posicion del usuario, obligatoriamente voy a solicitarla

    return <UserPosition />; //Pantalla donde se solicita la posicion del usuario
  } else {
    switch (menu_option) {
      case NUEVO_NEGOCIO:
        return <NuevoNegocio />; //Pantalla donde se inicia el proceso de alta de un negocio
        break;
      case VER_NEGOCIOS:
        return <ReservarTurno />; //Pantalla donde se visualizan los negocios cercanos
        break;
      case USER_POSITION:
        return <UserPosition />; //Pantalla donde se solicita la posicion del usuario
        break;
      case QR_READER:
        dispatch(dataRead([]));
        return <QrReader />; //Pantalla donde se realiaz la lectura del codigo QR
        break;
      default:
        return <VerNegocios />; //Por default la pantalla que se ve es la de negocios cercanos
        break;
    }
  }
};



function MenuSwitch() {
  const menu_option = useSelector((state) => state.menu_option.menu_option); //Menu seleccionado
  const center_map = useSelector((state) => state.center_map.region); //Centro del mapa
  // console.log("Centro del mapa: ");
  // console.log(center_map);
  const dispatch = useDispatch(); //Cada vez que cambio de menu, centro el mapa en la posicion que el usuario configuro
  useEffect(() => {
    dispatch(centerMapToSetted());
  }, [menu_option]);

  //Sirve para solicitar los permisos y obtener la pisicion del usuario
  /*const getInitialState = () => {
    getLocation().then((data) => {
      dispatch(
        centerMap({
          latitude: data.latitude,
          longitude: data.longitude,
          direccion: "",
        })
      );
    });
  };*/

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 20 }}>
        <RenderMenuSelected
          menu_option={menu_option}
          center_map={center_map}
        ></RenderMenuSelected>
      </View>
      <View style={{ flex: 2 }}>
        <BottomMenu />
      </View>
    </View>
  );
}

export default MenuSwitch;
