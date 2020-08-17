import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { dataRead, qrPermissions } from "../../actions/qrReaderActions";
import { setRegisterData } from "../../actions/RegisterActions";

export default function QrReader(props) {
  const qr_state = useSelector((state) => state.qr_state);
  const registro = useSelector((state) => state.registro);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    askPermissions();
  }, [dispatch]);

  const askPermissions = () => {
    let status = BarCodeScanner.requestPermissionsAsync();

    dispatch(
      qrPermissions({
        hasPermission: status === "granted",
        loadingPermissions: false,
      })
    );
  };

  const fetchApi = (readed) => {
    //Ejemplo donde busco a un endpoint lo que lei del qr para obtener una informcion
    fetch(qr_state.url + readed)
      .then((res) => res.json())
      .then((res) => {
        dispatch(dataRead(res.forms)); //Guardo lo que lei en redux
      });
  };

  const handleBarCodeScanned = ({ data }) => {
    const lecturaDocumento = data.split("@");

    let registroObject = registro.registerData;

    registroObject.documento = lecturaDocumento[4];
    registroObject.nroTramite = lecturaDocumento[0];
    registroObject.nombre = lecturaDocumento[2];
    registroObject.apellido = lecturaDocumento[1];

    //Cuando logro escanear algo con la camara
    setScanned(true);
    dispatch(setRegisterData(registroObject));

    props.navigation.navigate("Registro DNI");

    //fetchApi(data);
  };

  if (qr_state.loadingPermissions) {
    return <></>;
  } else if (!qr_state.loadingPermissions) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {qr_state.hasPermission === null ? (
          <Text>Necesitamos permisos para acceder a su cámara</Text>
        ) : null}

        {!scanned && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        )}

        {scanned && (
          <Text
            style={{
              position: "absolute",
              left: 50,
              top: 200,
              backgroundColor: "white",
            }}
          >
            {qr_state?.data[0]?.name}
          </Text>
        )}
      </View>
    );
  }
}
