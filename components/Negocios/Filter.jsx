import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Slider,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Picker, Icon } from "native-base";
import { apiCalls } from "../../api/apiCalls";
import { getNegocios } from "./FunctionNegocios";
import {filterNegocioDistance} from "../../Utils/constantes"
import {setNegocioFilters} from "../../actions/FilterNegocioActions"



export default function Filter() {
  const [direccion, setDireccion] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [kilometros, setKilometros] = useState(0);
  const [rubro, setRubro] = useState(0);
  const [rubros, setRubros] = useState([]);
  const dispatch = useDispatch();
  const access = useSelector((state) => state.access);
  const filterNegocio = useSelector((state) => state.filterNegocio);

  useEffect(() => {
    if (kilometros === 0){
      setKilometros(filterNegocio.km)
      setRubro(filterNegocio.rubro)
    
      apiCalls
    .getRubros(access.token)
    .then((response) => {
      response.data.unshift({ idRubro: 0, nombre: "Seleccione un rubro" });
      setRubros(response.data);
    })
    .catch((code, message) => {});
  }
    
  });

  const setFiltros = () => {
    dispatch(setNegocioFilters({km:kilometros, rubro:rubro}))
    getNegocios(dispatch, rubro, access.idPersona, kilometros ,access.token );
    setModalVisible(false);
  };



  const pickerItemsRubros = rubros.map((i) => (
    <Picker.Item key={i.nombre + "rubro"} label={i.nombre} value={i.idRubro} />
  ));

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View
          style={styles.input}
          value={direccion}
          onChangeText={(searchtext) => setDireccion(searchtext)}
        >
          <FontAwesomeIcon
            icon={faFilter}
            size={20}
            style={{ marginTop: 20, marginLeft: 5, color: "#0CA4C9" }}
          />
        </View>
      </TouchableOpacity>
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
                Filtrar Negocios
              </Text>
            </View>
            <View style={{ ...styles.rowFilters, marginTop: 15 }}>
              <Text style={styles.textLabel}>
                Radio de busqueda: {kilometros}km
              </Text>
            </View>
            <View style={styles.rowFilters}>
              <Slider
                style={styles.slider}
                value={kilometros}
                minimumValue={filterNegocioDistance}
                maximumValue={50}
                minimumTrackTintColor="#0CA4C9"
                maximumTrackTintColor="#3e3e3e"
                thumbTintColor="white"
                onValueChange={(value) => setKilometros(parseInt(value))}
              />
            </View>

            <View style={styles.rowFilters}>
              <Text style={styles.textLabel}>Rubro</Text>
            </View>
            <View style={styles.rowFilters}>
              <View
                style={{
                  justifyContent: "space-between",

                  flex: 1,
                }}
              >
                <Picker
                  note
                  mode="dropdown"
                  style={styles.inputRubro}
                  selectedValue={rubro}
                  onValueChange={(e) => setRubro(e)}
                  iosIcon={
                    <Icon
                      name="arrow-down"
                      style={{ color: "#ccc", marginRight: 0 }}
                    />
                  }
                >
                  {pickerItemsRubros}
                </Picker>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: "25%" }}>
              <TouchableOpacity
                style={styles.touchableButtonsFilter}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonsModalFilter}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableButtonsFilter}
                onPress={setFiltros}
              >
                <Text style={styles.buttonsModalFilter}>Aplicar Filtros</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 60,
    top: "10%",
    elevation: 8,
    borderRadius: 100,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginTop: 35,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  inputRubro: {
    height: 35,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    width: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  slider: {
    width: "100%",
    height: 15,
  },
  modalView: {
    margin: 10,
    height: "35%",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  rowFilters: {
    flexDirection: "row",
    flex: 1,
  },
  buttonsModalFilter: {
    color: "#2572FF",
  },
  touchableButtonsFilter: { flex: 1, alignItems: "center" },
  textLabel: {
    flex: 1,
  },
});
