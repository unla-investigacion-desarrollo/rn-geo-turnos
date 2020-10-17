import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { dataRead, qrPermissions } from "../../actions/qrReaderActions";
import { setRegisterData } from "../../actions/RegisterActions";
import {apiCalls} from "../../api/apiCalls"
import SuccessQrRead from "./SuccessQrRead"

export default function QrReader(props) {
  const qr_state = useSelector((state) => state.qr_state);
  const registro = useSelector((state) => state.registro);
  const [scanned, setScanned] = useState(false);
  const [scannedQR, setScannedQR] = useState(false);
  const [nombreEmprendimiento, setNombreEmprendimiento] = useState("");
  const access = useSelector((state) => state.access);
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

  const postOcuparLocal = () => {
    apiCalls.ocuparLocal( {
      idEmprendimiento: 1,
      idPersona: access.idPersona,
      usuarioModi: access.idPersona
    }, access.token ).then( ( response ) => {
      setNombreEmprendimiento(response.data.emprendimiento.nombre)
      console.log(response.data.emprendimiento.nombre)
    } ).catch( ( code, message ) => {
      
    } )
  }

  const handleBarCodeScanned = ({ data }) => {
    if (data.includes('www.')){  
      postOcuparLocal(data)
      setScannedQR(true)
      setScanned(true)
    }else{
      const lecturaDocumento = data.split("@");
      let registroObject = registro.registerData;
  
      if (data[0] === "@"){
        registroObject.sexo = lecturaDocumento[8] === "M" ? "hombre" : "mujer";
        registroObject.documento = lecturaDocumento[1];
        registroObject.nroTramite = lecturaDocumento[10];
        registroObject.nombre = lecturaDocumento[5];
        registroObject.apellido = lecturaDocumento[4];
      }else{
        registroObject.sexo = lecturaDocumento[3] === "M" ? "hombre" : "mujer";
        registroObject.documento = lecturaDocumento[4];
        registroObject.nroTramite = lecturaDocumento[0];
        registroObject.nombre = lecturaDocumento[2];
        registroObject.apellido = lecturaDocumento[1];
      }
      console.log(registroObject)
        //Cuando logro escanear algo con la camara
      dispatch(setRegisterData(registroObject));
      setScanned(true);
      // props.navigation.navigate("Datos Personales");
    }
    
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

        {/* {scanned && (
         <View/>
        )} */}

        {scannedQR && (
         <SuccessQrRead emprendimiento={nombreEmprendimiento}/>
        )}

       
      </View>
    );
  }
}
