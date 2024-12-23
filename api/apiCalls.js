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


function modificarEstadoTurno(idTurno, params, token) {
  return api.patch("/turno/"+idTurno, params ,{
    headers: { token_auth: token },
  });
}

function bajaEmprendimiento(idEmprendimiento, token) {
  return api.patch("/emprendimiento/"+idEmprendimiento+"/bajaLogica", {} ,{
    headers: { token_auth: token },
  });
}

function getProvincias() {
  return api.get("/provincia");
}

function getLocalidadesPorProvincia(idLocalidad) {
  return api.get("/provincia/" + idLocalidad + "/localidades");
}

function getRubros(token) {
  return api.get("/rubro", {
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

function getTurnosUsuario(idPersona, date, token) {
  return api.get("/turno/persona/" + idPersona, {
    headers: { token_auth: token },
    params: {fecha: date}
  });
}

function getTurnosEmprendimiento(idEmprendimiento, date, token) {
  return api.get("/turno/emprendimiento/" + idEmprendimiento, {
    headers: { token_auth: token },
    params: {fecha: date}
  });
}


function getInfoEmprendimiento(idEmprendimiento, token) {
  return api.get("/emprendimiento/" + idEmprendimiento, {
    headers: { token_auth: token },
  });
}

function setNewInfoUsuario(idPersona, parameters, token) {
  return api.put("/fisica/" + idPersona, parameters, {
    headers: { token_auth: token },
  });
}

function setNewInfoEmprendimiento(idEmprendimiento, parameters, token) {
  return api.put("/emprendimiento/" + idEmprendimiento, parameters, {
    headers: { token_auth: token },
  });
}

function setNewUbicacion(idUbicacion, parameters, token) {
  // console.log(parameters)
  return api.put("/ubicacion/" + idUbicacion, parameters, {
    headers: { token_auth: token },
  });
}

function postResetPassword(parameters) {
  return api.post("/persona/resetpassword", parameters);
}
function postLogin(parameters) {
  return api.post("/login", parameters);
}

function ocuparLocal(parameters,token) {
  return api.post("/ocupacionLocal", parameters,{
    headers: { token_auth: token },
  });
}

function getEmprendimientosFiltro(idRubro,km, latitud,longitud,token) {
  return api.get("/emprendimiento/" + idRubro + "/"+ latitud + "/"+ longitud +"/"+ km + "/traerPorRubroKmLatLong", {
    headers: { token_auth: token },
  });
}

function getUbicacionPersona(idPersona, token) {
  return api.get("/persona/" + idPersona + "/coordenadas", {
    headers: { token_auth: token },
  });
}

function addImage(parameters,token) {
  return api.post("/emprendimiento/uploadImage", parameters,{
    headers: { token_auth: token },
  });
}

export const apiCalls = {
  getInfoUsuario,
  getInfoEmprendimiento,
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
  setNewUbicacion,
  setNewInfoEmprendimiento,
  ocuparLocal,
  addImage,
  bajaEmprendimiento,
  getTurnosUsuario,
  getTurnosEmprendimiento,
  modificarEstadoTurno,
};
