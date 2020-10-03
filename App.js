import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import store from "./store.js";
import { StatusBar, Text } from "react-native";
import Init from "./components/Init";
import { Root } from "native-base";

console.disableYellowBox = true; //PARA ESCONDER LAS WARNINGS
function App() {
  const toastConfig = {
    success: (internalState) => (
      <View
        style={{
          height: 60,
          width: "100%",
          borderRadius: 10,
          margin: 10,
          padding: 10,
          borderWidth: 3,
          borderColor: "green",
        }}
      >
        <Text>{internalState.text1}</Text>
      </View>
    ),
    error: () => {},
    info: () => {},
  };

  return (
    <Provider store={store}>
      <Root>
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
          <Init></Init>
        </View>
      </Root>
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
