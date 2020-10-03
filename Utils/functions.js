import * as SecureStore from "expo-secure-store";

export const getToken = async () => {
  try {
    const credentials = await SecureStore.getItemAsync("loginData");

    if (credentials === null) {
      return "";
    } else {
      return JSON.parse(credentials).token;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getIdPersona = async () => {
  try {
    const credentials = await SecureStore.getItemAsync("loginData");
    if (credentials === null) {
      return "";
    } else {
      return JSON.parse(credentials).idPersona;
    }
  } catch (e) {
    console.log(e);
  }
};
