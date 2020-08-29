import Geocoder from "react-native-geocoding";
import { Linking } from "react-native";

export const getLocation = () => {
  //Ubicacion del usuario
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (data) => resolve(data.coords),
      (err) => reject(err)
    );
  });
};

export const geocodeLocationByName = (locationName) => {
  return new Promise((resolve, reject) => {
    Geocoder.from(locationName)
      .then((json) => {
        const addressComponent = json.results[0].address_components[0];
        resolve(addressComponent);
      })
      .catch((error) => reject(error));
  });
};

export const geocodeLocationByCoords = (lat, long) => {
  return new Promise((resolve, reject) => {
    Geocoder.from(lat, long)
      .then((json) => {
        const addressComponent = json.results[0].address_components[0];
        resolve(addressComponent);
      })
      .catch((error) => reject(error));
  });
};

export const routeDirection = (lat, longitud) => {
  //Funcion que permite redirigir a google maps/maps
  const scheme = Platform.select({
    ios: "maps:0,0?q=",
    android: "geo:0,0?q=",
  });
  const latLng = lat + "," + longitud;
  const label = "Custom Label";
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};
