import { api_key } from "../../services/api_map";

import axios from "axios";
export const searchPosition = async (direccion) => {
  //Funcion que va a consultar al endpoint de google maps para obtener la informacion de la direccion que se introducio

  if (direccion !== "") {
    // const url = "https://maps.googleapis.com/maps/api/geocode/json?address="; //Url del endpoint
    // const key = api_key; //Apikey que necesita google maps, CAMBIAR PARA PASAR A PRODUCCION

    // let address = direccion.replace(/\s/g, "+"); //Reemplazo los espacios por +
    // address = address + "+argentina"; //Concateno argentina a la busqueda

    // let key_url = "&key=" + key; //concateno la key para armar la url
    const url = "https://api.opencagedata.com/geocode/v1/json?q="
    const address = encodeURI(direccion)
    const key = "&key=9d2aa62241c640a6bc93e2fe34cae046&language=es&pretty=1"

    // console.log(url + address + key_url); //armo la url completa para hacer el fetch

    const responseJson = await axios.get(url+address+key);

    const data = responseJson.data;
    let localizacionNegocio = {
      longitude: 0,
      latitude: 0,
    };

    if (data.results.length > 0) {
      localizacionNegocio = {
        longitude: data.results[0].bounds.northeast.lng,
        latitude: data.results[0].bounds.northeast.lat,
      };
      console.log(localizacionNegocio)
    }

    return localizacionNegocio;
  }
};
export const validarCamposDatosNegocio = (object) => {
  if (object.nombre === "") {
    return "Nombre";
  }
  if (object.cuit === "") {
    return "CUIT";
  }
  if (object.calle === "") {
    return "Calle";
  }
  if (object.numero === "") {
    return "Numero";
  }
 
  if (object.provincia === 0) {
    return "Provincia";
  }

  if (object.localidad === 0) {
    return "Localidad";
  }

  if (object.rubro === 0) {
    return "Rubro";
  }
  if (object.emprendimiento === 0) {
    return "Tipo de emprendimiento";
  }

  if (object.capacidadPersonas === 0) {
    return "Capacidad de personas";
  }
  return "";
};
