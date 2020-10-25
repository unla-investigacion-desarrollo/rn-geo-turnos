import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import {useSelector} from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserCircle,
  faMapMarkerAlt,
  faStore,
  faChevronRight,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { actions } from "../../actions/types";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import * as SecureStore from "expo-secure-store";
import { setRegisterData } from "../../actions/RegisterActions";
import {apiCalls} from "../../api/apiCalls"
import Logo from "../../assets/LOGO.png"
import { setCredentials } from "../../actions/AccessActions";
import { setTokenAxios } from "../../api/api";



export default function Configuraciones(props) {
  const dispatch = useDispatch();
  const access = useSelector((state) => state.access);
  const [modalVisible, setModalVisible] = useState(false);

  const navigateConfiguraciones = (opcion) => {
    props.navigation.navigate(opcion, { source: "config" });
  };
  const cerrarSesion = () => {
    clearCredentials();
    dispatch({ type: actions.LOGGED, payload: 0 });
    dispatch(setRegisterData({}));
  };

  const clearCredentials = async () => {
    try {
      await SecureStore.deleteItemAsync("credentials");
    } catch (e) {
      console.log(e);
    }
  };

  const remember = async (loginResponse) => {
    setAccessCredentials(loginResponse);
  };


  const setAccessCredentials = async (credentials) => {
    try {
      await SecureStore.setItemAsync(
        "credentials",
        JSON.stringify(credentials)
      );
      dispatch(setCredentials(credentials));
      setTokenAxios(credentials.token);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteNegocio = () => {
    
    apiCalls.bajaEmprendimiento(access.idEmprendimiento, access.token)
    .then((response) => {
      let responseLogin = {
        token: access.token,
        idPersona: access.idPersona,
        idPerfil: access.idPerfil == 1 ? access.idPerfil : 2,
        idEmprendimiento: 0
      };
      clearCredentials()
      remember(responseLogin);
    }).catch(error => {
      dispatch({
        type: actions.TOAST,
        payload: {
          message:
            "Hubo un problema para eliminar el negocio",
          type: "error",
          visibilityTime: 3000,
        },
      });
    }).finally(() =>{
      setModalVisible(false)

    }
    )
    
  }


  const apiTest = () => {
    apiCalls
    .addImage({
      idEmprendimiento: 1,
      // imageBase64: ""
    }, access.token)
    .then((response) => {
      console.log("piola")
    })
    .catch((code, message) => {
      console.log(code.message)
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#6DCAE1", "#0CA4C9"]}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateConfiguraciones("Datos Personales")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faUserCircle} style={styles.icon} />
              <Text style={styles.textButton}> Datos personales </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateConfiguraciones("Tu Ubicación")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
              <Text style={styles.textButton}> Ubicación </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>
          {access.idPerfil!==3?(
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateConfiguraciones("Información Negocio")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faStore} style={styles.icon} />
              <Text style={styles.textButton}> Añadí tu negocio </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>):<></> }
          {access.idPerfil!==2?(
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateConfiguraciones("Editar Negocio")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faStore} style={styles.icon} />
              <Text style={styles.textButton}> Configuracion del negocio </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>):<></>}

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateConfiguraciones("QR del Negocio")}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faCloudDownloadAlt} style={styles.icon} />
              <Text style={styles.textButton}> QR del Negocio </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>
          {access.idPerfil!==2?(
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faStore} style={styles.icon} />
              <Text style={styles.textButton}> Eliminar negocio </Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity>):<></>}
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => apiTest()}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faStore} style={styles.icon} />
              <Text style={styles.textButton}>Añadir imagen</Text>
              <FontAwesomeIcon icon={faChevronRight} style={styles.iconArrow} />
            </View>
          </TouchableOpacity> */}
        </View>
        
        <View style={{ backgroundColor: "transparent" }}>
          <View>
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: "white",
                marginLeft: 50,
                marginRight: 50,
                borderRadius: 5,
                marginBottom: 10,
              }}
              onPress={cerrarSesion}
            >
              <View title="saveDatos" style={styles.bottomButton}>
                <Text style={{ fontSize: 17, color: "red" }}>
                  Cerrar sesión
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.rowFilters}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#2572FF",
                }}
              >
                Eliminar negocio
              </Text>
            </View>
            <View style={{ ...styles.rowFilters, marginTop: 15 }}>
              <Text style={styles.textLabel}>
                ¿Está seguro que quiere eliminar su negocio? Esta acción no se puede deshacer
              </Text>
            </View>
        

           

            <View style={{ flexDirection: "row", marginTop: "10%" }}>
              <TouchableOpacity
                style={styles.touchableButtonsFilter}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonsModalFilter}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableButtonsFilter}
                onPress={deleteNegocio}
              >
                <Text style={styles.buttonsModalFilter}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    color: "#fff",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "#fff",
    //   borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  touchableButtonsFilter: { flex: 1, alignItems: "center" },
  textButton: {
    color: "#fff",
    fontSize: 15,
    paddingTop: 3,
    paddingLeft: 10,
  },
  bottomButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    flex: 6,
  },
  iconArrow: {
    color: "#fff",
    right: 15,
    top: 5,
    position: "absolute",
  },
  buttonsModalFilter: {
    color: "#2572FF",
  },
  icon: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  modalView: {
    margin: 10,
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
