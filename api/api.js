import axios from 'axios';

export default axios.create({
    baseURL: "http://192.168.0.3:8080/alimentar/api/",
    timeout: 10000000,
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Accept': 'application/json'
    }
});

