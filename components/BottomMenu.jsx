import React from "react";
import { View } from "react-native";

import MenuMasNegocios from "./MenuMasNegocios";
import MenuNegocios from "./MenuNegocios";
import MenuUserPosition from "./MenuUserPosition";

function BottomMenu() {
  const colorSeleccionadoIcon = "#1A73E8";
  const colorIcon = "#8b8989";

  return (
    <View
      style={{
        flexDirection: "row",
        borderColor: "#ddd",
        height: "80%",
        borderTopWidth: 1,
      }}
    >
      <>
        <MenuMasNegocios
          colorSeleccionadoIcon={colorSeleccionadoIcon}
          colorIcon={colorIcon}
        />
      </>
      <>
        <MenuUserPosition
          colorSeleccionadoIcon={colorSeleccionadoIcon}
          colorIcon={colorIcon}
        />
      </>
      <>
        <MenuNegocios
          colorSeleccionadoIcon={colorSeleccionadoIcon}
          colorIcon={colorIcon}
        />
      </>
    </View>
  );
}

export default BottomMenu;
