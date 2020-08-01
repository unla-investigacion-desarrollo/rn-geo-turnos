import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import store from "./store.js";
import { StatusBar } from "react-native";
import MenuSwitch from "./components/Menu/MenuSwitch";

function App() {
  return (
    <Provider store={store}>
      <View
        style={{
          backgroundColor: "#fff",
          position: "absolute",
          height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
        }}
      >
        <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="#fff"
          //Background color of statusBar only works for Android
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
      </View>
      <View style={styles.container} style={{ flex: 1 }}>
        <MenuSwitch></MenuSwitch>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
export default App;
