import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import MapContainer from "./MapContainer";
import VerNegocios from "./VerNegocios";
import BottomMenu from "./BottomMenu";
import UserPosition from "./UserPosition";
import {
  NUEVO_NEGOCIO,
  VER_NEGOCIOS,
  USER_POSITION,
} from "../actions/menuOptions";
import { switchMenu } from "../actions/menuSwitchActions";
import { centerMapToSetted } from "../actions/centerMapActions";

const RenderMenuSelected = ({ menu_option, center_map }) => {
  const dispatch = useDispatch();
  if (!center_map.latitude) {
    dispatch(switchMenu(USER_POSITION));

    return <UserPosition />;
  } else {
    switch (menu_option) {
      case NUEVO_NEGOCIO:
        return <MapContainer />;
        break;
      case VER_NEGOCIOS:
        return <VerNegocios />;
        break;
      case USER_POSITION:
        return <UserPosition />;
        break;
      default:
        return <VerNegocios />;
        break;
    }
  }
};

function MenuSwitch() {
  const menu_option = useSelector((state) => state.menu_option.menu_option);
  const center_map = useSelector((state) => state.center_map.region);
  const center_map_setted = useSelector((state) => state.center_map.region);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(centerMapToSetted());
  }, [menu_option]);

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
