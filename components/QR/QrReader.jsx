import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { dataRead, qrPermissions } from "../../actions/qrReaderActions";

export default function QrReader() {
  const qr_state = useSelector((state) => state.qr_state);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    //Pido permisos de camara
    askPermissions();
  }, []);

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
    //Cuando logro escanear algo con la camara
    setScanned(true);

    fetchApi(data);
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


        {!scanned &&
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        }


        {scanned && (
          <Text
            style={{
              position: 'absolute',
              left: 50,
              top: 200,
              backgroundColor: 'white',
            }}
          >
            {qr_state?.data[0]?.name}
          </Text>
        )}
      </View>
    );
  }
}
