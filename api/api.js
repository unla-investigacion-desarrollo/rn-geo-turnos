import axios from 'axios';

export default axios.create({
    baseURL: "http://192.168.0.3:8080/reactivar/api/",
    timeout: 10000000,
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Accept': 'application/json',
        'token_auth': 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJyZWFjdGl2YXIiLCJzdWIiOiJhZG1pbkB1bmxhIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTU5ODgxOTAyNiwiZXhwIjoxNTk4ODE5MzI2fQ._GYnl5DL7M55Ra83sLjHy6nDLtPwBbJ2nZhvev4ns9O8n27XkE6p9JRYk3LS7ccbxmeOvGWuwWPhIDujPYEU6w'
    }
});

