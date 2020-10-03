import * as SecureStore from "expo-secure-store";

export const getCredentials = async () => {
  try {
    const credentials = await SecureStore.getItemAsync("credentials");

    if (credentials === null) {
      return "";
    } else {
      return JSON.parse(credentials);
    }
  } catch (e) {
    console.log(e);
  }
};
