import React from "react";
import { View } from "react-native";

import MenuNegocios from "./MenuNegocios";
import MenuTurnos from "./MenuTurnos";
import MenuConfig from "./MenuConfig";
import MenuQrRead from "./MenuQrRead";

function BottomMenu() {
  const colorSeleccionadoIcon = "#0CA4C9";
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
        <MenuNegocios
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
        <MenuConfig
          colorSeleccionadoIcon={colorSeleccionadoIcon} //componente de menu para solicitar posicion al usuario
          colorIcon={colorIcon}
        />
      </>
      <>
        <MenuTurnos
          colorSeleccionadoIcon={colorSeleccionadoIcon} //componente del menu para visualizar los negocios cercanos
          colorIcon={colorIcon}
        />
      </>
    </View>
  );
}

export default BottomMenu;
