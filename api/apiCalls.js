import api from "./api";

function postArticulo(parameters) {
  return api.post("/articulo", parameters);
}

function postAltaUsuario(parameters) {
  return api.post("/fisica", parameters);
}

function postAltaEmprendimiento(parameters) {
  return api.post("/emprendimiento", parameters);
}

function getEmprendimientos() {
  return api.get("/emprendimiento/");
}

function getLocalidades() {
  return api.get("/localidad/");
}

function getProvincias() {
  return api.get("/provincia");
}

function getLocalidadesPorProvincia(idLocalidad) {
  return api.get("/provincia/" + idLocalidad + "/localidades");
}

function getRubros(token) {
  return api.get("/rubro/",{
    headers: { token_auth: token },
  });
}

function getTipoEmprendimiento(token) {
  return api.get("/tipoEmprendimiento/",{
    headers: { token_auth: token },
  });
}

function postTurnos(parameters) {
  return api.post("/turno/", parameters);
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

export const apiCalls = {
  getInfoUsuario,
  postResetPassword,
  getLocalidades,
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
};
