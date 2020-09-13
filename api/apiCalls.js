import api from './api';

function postArticulo(parameters){
    return api.post('/articulo', parameters)
}

function postAltaUsuario(parameters){
    return api.post('/fisica', parameters)
}

function postAltaEmprendimiento(parameters){
    return api.post('/emprendimiento', parameters)
}

function getEmprendimientos() {
    return api.get('/emprendimiento/');
}

function getLocalidades() {
    return api.get('/localidad/');
}

function getProvincias(){
    return api.get('/provincia/');
}

function getLocalidadesPorProvincia(idLocalidad){
    return api.get('/provincia/' + idLocalidad + "/localidades");
}

function getRubros(){
    return api.get('/rubro/');
}

function getTipoEmprendimiento(){
    return api.get('/tipoEmprendimiento/');
}

function postTurnos(parameters){
    return api.post('/turno/', parameters);
}

export const apiCalls = {
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
}