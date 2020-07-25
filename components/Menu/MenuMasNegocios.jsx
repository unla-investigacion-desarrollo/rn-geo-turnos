import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchMenu } from "../../actions/menuSwitchActions";
import { NUEVO_NEGOCIO, VER_NEGOCIOS } from "../../actions/menuOptions";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

function MenuMasNegocios(props) {
  const [option_menu, setOptionMenu] = useState(0);
  const menu_option = useSelector((state) => state.menu_option.menu_option); //Menu seleccionado
  const dispatch = useDispatch();

  if (option_menu !== 0) dispatch(switchMenu(option_menu)); //Cambio de menu al seleccionarlo

  return (
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
              menu_option === VER_NEGOCIOS //Si el menu seleccionado es VER_NEGOCIOS, lo pinto de azul
                ? props.colorSeleccionadoIcon
                : props.colorIcon
            }
          />
          <Text
            style={{
              ...styles.menu_text_style,
              color:
                menu_option === VER_NEGOCIOS //Si el menu seleccionado es VER_NEGOCIOS, lo pinto de azul
                  ? props.colorSeleccionadoIcon
                  : props.colorIcon,
            }}
          >
            Negocios
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default MenuMasNegocios;

const styles = StyleSheet.create({
  menu_text_style: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
