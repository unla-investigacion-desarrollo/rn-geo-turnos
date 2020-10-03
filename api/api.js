import axios from "axios";
//import { getToken } from "../Utils/functions";

let token = "";

export const setTokenAxios = (tokenCredential) => {
  token = tokenCredential;
};

export default axios.create({
  baseURL: "http://192.168.1.56:8080/api/",
  timeout: 10000000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
