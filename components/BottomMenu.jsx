import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchMenu } from "../actions/menuSwitchActions";
import { NUEVO_NEGOCIO, VER_NEGOCIOS } from "../actions/menuOptions";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStoreAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

function BottomMenu() {
  const [option_menu, setOptionMenu] = useState(0);
  const colorSeleccionadoIcon = "#1A73E8";
  const colorIcon = "#8b8989";

  const menu_option = useSelector((state) => state.menu_option.menu_option);

  const dispatch = useDispatch();

  const menuSeleccionado = () => {};

  if (option_menu !== 0) dispatch(switchMenu(option_menu));

  return (
    <View
      style={{
        flexDirection: "row",
        borderColor: "#ddd",
        height: "80%",
        borderTopWidth: 1,
      }}
    >
      <View
        style={{
          flex: 3,
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => dispatch(switchMenu(NUEVO_NEGOCIO))}>
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faStoreAlt}
              size={30}
              color={
                menu_option === NUEVO_NEGOCIO
                  ? colorSeleccionadoIcon
                  : colorIcon
              }
            />

            <Text
              style={{
                ...styles.menu_text_style,
                color:
                  menu_option === NUEVO_NEGOCIO
                    ? colorSeleccionadoIcon
                    : colorIcon,
              }}
            >
              + Negocio
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => dispatch(switchMenu(VER_NEGOCIOS))}>
          <View style={{ alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faMapMarkedAlt}
              size={30}
              color={
                menu_option === VER_NEGOCIOS ? colorSeleccionadoIcon : colorIcon
              }
            />
            <Text
              style={{
                ...styles.menu_text_style,
                color:
                  menu_option === VER_NEGOCIOS
                    ? colorSeleccionadoIcon
                    : colorIcon,
              }}
            >
              Negocios
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BottomMenu;

const styles = StyleSheet.create({
  menu_text_style: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
