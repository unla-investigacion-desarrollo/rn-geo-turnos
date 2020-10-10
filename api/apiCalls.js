import api from "./api";

function postArticulo(parameters) {
  return api.post("/articulo", parameters);
}

function postAltaUsuario(parameters) {
  return api.post("/fisica", parameters);
}

function postAltaEmprendimiento(parameters, token) {
  return api.post("/emprendimiento", parameters,{
    headers: { token_auth: token },
  });
}

function getEmprendimientos(token) {
  return api.get("/emprendimiento/");
}

function getProvincias() {
  return api.get("/provincia");
}

function getLocalidadesPorProvincia(idLocalidad) {
  return api.get("/provincia/" + idLocalidad + "/localidades");
}

function getRubros(token) {
  return api.get("/rubro/", {
    headers: { token_auth: token },
  });
}

function getTipoEmprendimiento(token) {
  return api.get("/tipoEmprendimiento/", {
    headers: { token_auth: token },
  });
}

function postTurnos(parameters,token) {
  return api.post("/turno/", parameters, {
    headers: { token_auth: token },
  });
}

function getInfoUsuario(idPersona, token) {
  return api.get("/fisica/" + idPersona, {
    headers: { token_auth: token },
  });
}

function setNewInfoUsuario(idPersona, parameters, token) {
  return api.get("/fisica/" + idPersona, parameters, {
    headers: { token_auth: token },
  });
}

function postResetPassword(parameters) {
  return api.post("/persona/resetpassword/", parameters);
}
function postLogin(parameters) {
  return api.post("/login", parameters);
}

function getEmprendimientosFiltro(idRubro, idPersona, km,token) {
  return api.get("/emprendimiento/" + idRubro + "/"+ idPersona + "/" + km + "/traerPorRubroYKm", {
    headers: { token_auth: token },
  });
}

function getUbicacionPersona(idPersona, token) {
  return api.get("/persona/" + idPersona + "/coordenadas", {
    headers: { token_auth: token },
  });
}

export const apiCalls = {
  getInfoUsuario,
  postResetPassword,
  getRubros,
  getTipoEmprendimiento,
  postArticulo,
  postAltaUsuario,
  postAltaEmprendimiento,
  getEmprendimientos,
  getProvincias,
  getLocalidadesPorProvincia,
  postTurnos,
  postLogin,
  setNewInfoUsuario,
  getEmprendimientosFiltro,
  getUbicacionPersona,
};
