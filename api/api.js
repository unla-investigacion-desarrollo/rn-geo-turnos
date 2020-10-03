import axios from "axios";
//import { getToken } from "../Utils/functions";

let token = "";

export const setTokenAxios = (tokenCredential) => {
  token = "Bearer " + tokenCredential;
};

export default axios.create({
  baseURL: "http://192.168.1.56:8080/api/",
  timeout: 10000000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    token_auth:
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJyby5nb256YTIxOTVAZ21haWwuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTYwMTc1MTMwN30.qJV-JQCRGfilnfKfK_pZUnFM-cuGqPc8atGTtoz0nUeNsJCN_Oj00cerWOyUyGLOX-jeIzWTr_Xn0yGzgbzr4A",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
    Accept: "application/json",
  },
});
