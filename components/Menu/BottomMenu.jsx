import React from "react";
import { View } from "react-native";

import MenuMasNegocios from "./MenuMasNegocios";
import MenuNegocios from "./MenuNegocios";
import MenuUserPosition from "./MenuUserPosition";
import MenuQrRead from "./MenuQrRead";

function BottomMenu() {
  const colorSeleccionadoIcon = "rgba(57,147,255,0.7)";
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
          colorSeleccionadoIcon={colorSeleccionadoIcon} //Componente de menu para agregar negocios
          colorIcon={colorIcon}
        />
      </>
      <>
        <MenuQrRead
          colorSeleccionadoIcon={colorSeleccionadoIcon} //Componente de menu de lectura de qr
          colorIcon={colorIcon}
        />
      </>
      <>
        <MenuUserPosition
          colorSeleccionadoIcon={colorSeleccionadoIcon} //componente de menu para solicitar posicion al usuario
          colorIcon={colorIcon}
        />
      </>
      <>
        <MenuNegocios
          colorSeleccionadoIcon={colorSeleccionadoIcon} //componente del menu para visualizar los negocios cercanos
          colorIcon={colorIcon}
        />
      </>
    </View>
  );
}

export default BottomMenu;
