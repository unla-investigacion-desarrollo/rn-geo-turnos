import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchMenu } from "../actions/menuSwitchActions";
import { QR_READER } from "../actions/menuOptions";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

function MenuQrRead(props) {
  const [option_menu, setOptionMenu] = useState(0);
  const menu_option = useSelector((state) => state.menu_option.menu_option);
  const dispatch = useDispatch();

  if (option_menu !== 0) dispatch(switchMenu(option_menu)); //cambio de menu al seleccionarlo

  return (
    <View
      style={{
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => dispatch(switchMenu(QR_READER))}>
        <View style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faQrcode}
            size={30}
            color={
              menu_option === QR_READER //Si el menu seleccionado es QR_READER, lo pinto de azul
                ? props.colorSeleccionadoIcon
                : props.colorIcon
            }
          />
          <Text
            style={{
              ...styles.menu_text_style,
              color:
                menu_option === QR_READER //Si el menu seleccionado es QR_READER, lo pinto de azul
                  ? props.colorSeleccionadoIcon
                  : props.colorIcon,
            }}
          >
            Leer QR
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default MenuQrRead;

const styles = StyleSheet.create({
  menu_text_style: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
