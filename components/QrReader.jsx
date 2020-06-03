import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { dataRead, qrPermissions } from "../actions/qrReaderActions";

export default function QrReader() {
  const qr_state = useSelector((state) => state.qr_state);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    askPermissions();
  }, []);

  useEffect(() => {
    console.log(qr_state.data);
  }, [qr_state]);

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
    fetch(qr_state.url + readed)
      .then((res) => res.json())
      .then((res) => {
        dispatch(dataRead(res.forms));
      });
  };

  const handleBarCodeScanned = ({ data }) => {
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
          <Text>Requesting for camera permission</Text>
        ) : null}

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button
            title={"Presione aqui para escanear de nuevo"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    );
  }
}
