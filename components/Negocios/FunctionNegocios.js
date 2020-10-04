import { apiCalls } from "../../api/apiCalls";
import { addNegocios } from "../../actions/negociosListActions";

export const getNegocios = (dispatch, idRubro, idPersona, km, token) => {
  apiCalls
    .getEmprendimientosFiltro(idRubro, idPersona, km, token)
    .then((response) => {
      let negocios = response.data;
        negocios.forEach((n) => {
          n.latitude = parseFloat(n.ubicacion.latitud);
          n.longitude = parseFloat(n.ubicacion.longitud);
          n.calle = n.ubicacion.calle;
          n.numero = n.ubicacion.numero;
          n.name = n.nombre;
          n.idEmprendimiento = n.idEmprendimiento;
        });
        dispatch(addNegocios(negocios));

    })
    .catch((code, message) => {});
};
