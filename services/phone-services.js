import { Linking } from "react-native";

export const callNumber = (phoneNumber) => {
  let redirect = "";
  if (Platform.OS !== "android") {
    redirect = `telprompt:${phoneNumber}`;
  } else {
    redirect = `tel:${phoneNumber}`;
  }

  Linking.openURL(redirect);
};
