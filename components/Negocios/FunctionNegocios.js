import { apiCalls } from "../../api/apiCalls";
import { addNegocios } from "../../actions/negociosListActions";

export const getNegocios = (dispatch) => {
  console.log("Hola");
  apiCalls
    .getEmprendimientos()
    .then((response) => {
      let negocios = response.data;
      if (negocios.length > 0) {
        negocios.forEach((n) => {
          n.latitude = parseFloat(n.ubicacion.latitud);
          n.longitude = parseFloat(n.ubicacion.longitud);
          n.calle = n.ubicacion.calle;
          n.numero = n.ubicacion.numero;
          n.name = n.nombre;
          n.idEmprendimiento = n.idEmprendimiento;
        });
        dispatch(addNegocios(negocios));
      } else {
        //Toast type: info, text1: 'No se encontraron negocios con esos parametros'
      }
    })
    .catch((code, message) => {});
};
