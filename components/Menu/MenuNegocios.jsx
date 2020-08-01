import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchMenu } from "../../actions/menuSwitchActions";
import { NUEVO_NEGOCIO } from "../../actions/menuOptions";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";

function MenuNegocios(props) {
  const [option_menu, setOptionMenu] = useState(0);
  const menu_option = useSelector((state) => state.menu_option.menu_option); //menu seleccionado
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
      <TouchableOpacity onPress={() => dispatch(switchMenu(NUEVO_NEGOCIO))}>
        <View style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faStoreAlt}
            size={30}
            color={
              menu_option === NUEVO_NEGOCIO //Si el menu seleccionado es NUEVO_NEGOCIO, lo pinto de azul
                ? props.colorSeleccionadoIcon
                : props.colorIcon
            }
          />

          <Text
            style={{
              ...styles.menu_text_style,
              color:
                menu_option === NUEVO_NEGOCIO //Si el menu seleccionado es NUEVO_NEGOCIO, lo pinto de azul
                  ? props.colorSeleccionadoIcon
                  : props.colorIcon,
            }}
          >
            + Negocio
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default MenuNegocios;

const styles = StyleSheet.create({
  menu_text_style: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
