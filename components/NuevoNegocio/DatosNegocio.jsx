import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Slider, ScrollView} from "react-native";
import { Picker, Icon } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { setDataNegocio } from "../../actions/NuevoNegocioActions";
import {
  searchPosition,
  validarCamposDatosNegocio,
} from "./NuevoNegocioFunctions";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { apiCalls } from "../../api/apiCalls";
import { actions } from "../../actions/types";
import { setHorariosNegocio } from "../../actions/NuevoNegocioActions";


export default function DatosNegocio(props) {
  
  const access = useSelector((state) => state.access);
  const datosNegocio = useSelector((state) => state.nuevoNegocio.dataNegocio);
  const [capacidadPersonas, setCapacidadPersonas] = useState(0);
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState("");
  const [telefono, setTelefono] = useState("");
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [piso, setPiso] = useState("");
  const [depto, setDepto] = useState("");
  const [rubro, setRubro] = useState(0);
  const [rubros, setRubros] = useState([]);
  const [emprendimiento, setEmprendimiento] = useState(0);
  const [emprendimientos, setEmprendimientos] = useState([]);
  const [localidad, setLocalidad] = useState(0);
  const [localidades, setLocalidades] = useState([]);
  const [provincia, setProvincia] = useState(0);
  const [provincias, setProvincias] = useState([]);
  const [enableLocalidades, setEnableLocalidades] = useState(false);
  const dispatch = useDispatch();

  const isConfig = props?.route?.name === "Editar Negocio";

  

  useEffect(() => {  
      
      apiCalls.getRubros(access.token)
        .then((response) => {
          response.data.unshift({idRubro:0, nombre:"Seleccione un rubro"})
          setRubros(response.data)
          apiCalls.getTipoEmprendimiento(access.token)
          .then((response) => {
            response.data.unshift({idTipoEmprendimiento:0, nombre:"Seleccione tipo de emprendimiento"})
            setEmprendimientos(response.data)
            apiCalls.getProvincias()
            .then((response) => {
              response.data.unshift({idProvincia:0, nombre:"Seleccione una provincia"})
              setProvincias(response.data)
              if(isConfig){
                getInfoEmprendimiento()
              }else{
                getInfoEmprendimientoRedux()
              }
            }).catch((res) =>{
              console.log("Catch provincias")
              console.log(res.message)

          });
          }).catch((res) =>{
            console.log("Catch Tipo emprendimiento")
            console.log(res.message)
          });
        }).catch((res) =>{
          console.log("Catch Rubros")
          console.log(res.message)
        });
    
      
    
  }, [datosNegocio]);

  const getInfoEmprendimientoRedux = () => {
    setEnableLocalidades(false)

      if (datosNegocio.capacidadPersonas) {
        setCapacidadPersonas(datosNegocio.capacidadPersonas);
      }
      if (datosNegocio.nombre) {
        setNombre(datosNegocio.nombre);
      }
      if (datosNegocio.cuit) {
        setCuit(datosNegocio.cuit);
      }
      if (datosNegocio.telefono) {
        setTelefono(datosNegocio.telefono);
      }
      if (datosNegocio.calle) {
        setCalle(datosNegocio.calle);
      }
      if (datosNegocio.numero) {
        setNumero(datosNegocio.numero);
      }
      if (datosNegocio.piso) {
        setPiso(datosNegocio.piso);
      }
      if (datosNegocio.depto) {
        setDepto(datosNegocio.depto);
      }
      if (datosNegocio.rubro) {
        setRubro(datosNegocio.rubro);
      }
      if (datosNegocio.emprendimiento) {
        setEmprendimiento(datosNegocio.emprendimiento);
      }
      if (datosNegocio.localidad) {
        setLocalidad(datosNegocio.localidad);
      }
      if (datosNegocio.provincia) {
        setProvincia(datosNegocio.provincia);
      }
    
  }


  const getInfoEmprendimiento = () => {
    
    apiCalls.getInfoEmprendimiento(access.idEmprendimiento, access.token)
      .then((response) => {
          let horariosAux = []
          let tiempoAtencionAux = 0
          // console.log(response.data)
          response.data.configuracionesLocal?.forEach(item => {
            tiempoAtencionAux = item.tiempoAtencion
            horariosAux.push({
              diaSemana: parseInt(item.diaSemana),
              horaDesde1: item.turno1Desde,
              horaDesde2: item.turno2Desde,
              horaHasta1: item.turno1Hasta,
              horaHasta2: item.turno2Hasta,
            })
          })
          let horariosRedux = {horarios: horariosAux, tiempoAtencion: tiempoAtencionAux}
          if (horariosAux.length > 0) {
            dispatch(setHorariosNegocio(horariosRedux));
          }
          setCapacidadPersonas(response.data.capacidad);
          setNombre(response.data.nombre);
          setCuit(response.data.cuit);
          setTelefono(response.data.telefono.toString());
          setCalle(response.data.ubicacion.calle);
          setNumero(response.data.ubicacion.numero.toString());
          setPiso(response.data.ubicacion.piso.toString());
          setDepto(response.data.ubicacion.departamento);
          setRubro(response.data.rubro.idRubro);
          setEmprendimiento(response.data.tipoEmprendimiento.idTipoEmprendimiento);
          setLocalidad(response.data.ubicacion.localidad.idLocalidad);
          getLocalidadesPorProvincia(response.data.ubicacion.localidad.provincia.idProvincia,"useefect")
      })
      .catch((message) => {
        console.log("Catch getInfoEmprendimiento")
        console.log(message)
      })
  }

  const getLocalidadesPorProvincia = (e,info) => {
    if (e != 0){
      setProvincia(e)
      apiCalls.getLocalidadesPorProvincia(e)
        .then((response) => {
          setEnableLocalidades(true)
          response.data.unshift({idProvincia:0, nombre:"Seleccione una localidad"})
          setLocalidades(response.data)
        }).catch((res) =>{
          console.log("Catch localidades por provincia")
          console.log(res.message)
      });
    }
  
  }

  const localidadSeleccionada = (locali) => localidades.find(
    (localidad) => localidad.idLocalidad === locali
  );

  const continuar = () => {
    let dataNegocio = {
      nombre: nombre,
      cuit: cuit,
      telefono: telefono,
      calle: calle,
      numero: parseInt(numero),
      piso: piso,
      depto: depto,
      rubro: rubro,
      emprendimiento: emprendimiento,
      localidad: localidad,
      provincia: provincia,
      capacidadPersonas: capacidadPersonas,
      latitude: 0,
      longitude: 0,
    };
    
    let dataNegocioValida = validarCamposDatosNegocio(dataNegocio)
    if (dataNegocioValida === "") {
      searchPosition(calle + " " + numero + " "+ localidadSeleccionada(localidad).nombre).then((response) => {
        dataNegocio.latitude = response.latitude;
        dataNegocio.longitude = response.longitude;
        if (dataNegocio.latitude !== 0 && dataNegocio.longitude !== 0) {
          dispatch(setDataNegocio(dataNegocio));
          if(!isConfig){
            props.navigation.navigate("Ubicación")
          }else{
            props.navigation.navigate("Ubicación del Negocio");
          }
        }
      });
    }else{
      dispatch( {
        type: actions.TOAST, payload: {
          message: "Faltan completar campos: " + dataNegocioValida ,
          type: "warning",
          visibilityTime: 10000
        }
      })
    }
  };

  const pickerItemsLocalidades = localidades.map(i => (
    <Picker.Item key = {i.nombre} label={i.nombre} value={i.idLocalidad} />
  ))

  const pickerItemsProvincias = provincias.map(i => (
    <Picker.Item key = {i.nombre} label={i.nombre} value={i.idProvincia} />
  ))

  const pickerItemsRubros = rubros.map(i => (
    <Picker.Item key = {i.nombre + "rubro"} label={i.nombre} value={i.idRubro} />
  ))

  const pickerItemEmprendimientos = emprendimientos.map(i => (
    <Picker.Item key = {i.nombre + "tipoEmprendimiento"} label={i.nombre} value={i.idTipoEmprendimiento} />
  ))

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#6DCAE1", "#0CA4C9"]}
        style={{
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginLeft: 15, marginRight: 15, flex: 13 }}>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Nombre del Negocio</Text>
            <View style={styles.viewContainer}>
              <TextInput
                style={styles.input}
                value={nombre}
                placeholder='Ingrese el nombre del negocio'
                onChangeText={(e) => setNombre(e)}
              ></TextInput>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 7, flex: 1, paddingRight: 10 }}>
              <Text style={styles.labelText}>N° Cuit</Text>
              <View style={styles.viewContainer}>
                <TextInput
                  style={styles.input}
                  value={cuit}
                  keyboardType="numeric"
                  placeholder='Ingrese el N° de CUIT'
                  onChangeText={(e) => setCuit(e)}
                ></TextInput>
              </View>
            </View>
            <View style={{ marginTop: 7, flex: 1 }}>
              <Text style={styles.labelText}>Teléfono</Text>
              <View style={styles.viewContainer}>
                <TextInput
                  style={styles.input}
                  value={telefono}
                  placeholder='Ingrese telefono'
                  keyboardType="numeric"
                  onChangeText={(e) => setTelefono(e)}
                ></TextInput>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Calle</Text>
            <View style={styles.viewContainer}>
              <TextInput
                style={styles.input}
                value={calle}
                placeholder='Ingrese la calle del negocio'
                onChangeText={(e) => setCalle(e)}
              ></TextInput>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 7, flex: 1, paddingRight: 10 }}>
              <View>
                <Text style={styles.labelText}>Número</Text>
                <View style={styles.viewContainer}>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder='Numeracion'
                    value={numero}
                    onChangeText={(e) => setNumero(e)}
                  ></TextInput>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 7, flex: 1, paddingRight: 10 }}>
              <View>
                <Text style={styles.labelText}>Piso</Text>
                <View style={styles.viewContainer}>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder='Piso '
                    value={piso}
                    onChangeText={(e) => setPiso(e)}
                  ></TextInput>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 7, flex: 1 }}>
              <View>
                <Text style={styles.labelText}>Departamento</Text>
                <View style={styles.viewContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder='Departamento'
                    value={depto}
                    onChangeText={(e) => setDepto(e)}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Provincia</Text>
            <Picker
              note
              mode="dropdown"
              style={[styles.input,]}
              selectedValue={provincia}
            
              onValueChange={(e) => getLocalidadesPorProvincia(e,"prov")}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              {pickerItemsProvincias}
            </Picker>
          </View>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Localidad</Text>
            <Picker
              note
              mode="dropdown"
              style={styles.input}
              selectedValue={localidad}
              enabled={enableLocalidades}
              onValueChange={(e) => setLocalidad(e)}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              {pickerItemsLocalidades}
            </Picker>
          </View>
          
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Rubro</Text>
            <Picker
              note
              mode="dropdown"
              style={styles.input}
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
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>Tipo de Emprendimiento</Text>
            <Picker
              note
              mode="dropdown"
              style={styles.input}
              selectedValue={emprendimiento}
              onValueChange={(e) => setEmprendimiento(e)}
              iosIcon={
                <Icon
                  name="arrow-down"
                  style={{ color: "#ccc", marginRight: 0 }}
                />
              }
            >
              {pickerItemEmprendimientos}
            </Picker>
          </View>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.labelText}>
              Capacidad de Personas: {capacidadPersonas}
            </Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              value={capacidadPersonas}
              minimumValue={0}
              maximumValue={50}
              minimumTrackTintColor="#fff"
              maximumTrackTintColor="#3e3e3e"
              thumbTintColor="white"
              onValueChange={(value) => setCapacidadPersonas(parseInt(value))}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={continuar}
            style={{
              backgroundColor: "white",
              height: 30,
              marginLeft: 50,
              marginRight: 50,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#2572FF",
                fontSize: 15,
                textAlign: "center",
                paddingTop: 5,
              }}
            >
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginTop: 8,
    width: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  labelText: {
    textAlign: "left",
    color: "white",
  },
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
