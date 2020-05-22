import React, { useEffect, Components } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import MapContainer from "./MapContainer";
import VerNegocios from "./VerNegocios";
import BottomMenu from "./BottomMenu";
import { NUEVO_NEGOCIO, VER_NEGOCIOS } from "../actions/menuOptions";
import { centerMap } from "../actions/centerMapActions";
import { getLocation } from "../services/location-service";

const RenderMenuSelected = ({ menu_option }) => {
  switch (menu_option) {
    case NUEVO_NEGOCIO:
      return <MapContainer />;
      break;

    case VER_NEGOCIOS:
      return <VerNegocios />;
      break;
    default:
      return <VerNegocios />;
      break;
  }
};

function MenuSwitch() {
  const dispatch = useDispatch();
  const menu_option = useSelector((state) => state.menu_option.menu_option);
  console.log(menu_option);
  useEffect(() => {
    getInitialState();
  }, [menu_option]);

  const getInitialState = () => {
    getLocation().then((data) => {
      dispatch(
        centerMap({
          latitude: data.latitude,
          longitude: data.longitude,
        })
      );
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 20 }}>
        <RenderMenuSelected menu_option={menu_option}></RenderMenuSelected>
      </View>
      <View style={{ flex: 2 }}>
        <BottomMenu />
      </View>
    </View>
  );
}

export default MenuSwitch;
