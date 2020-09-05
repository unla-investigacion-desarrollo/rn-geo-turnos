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

export const apiCalls = {
    postArticulo,
    postAltaUsuario,
    postAltaEmprendimiento,
}