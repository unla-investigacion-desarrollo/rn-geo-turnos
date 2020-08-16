import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity, Button}  from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function MisTurnos(props) {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
            <Text>Mis turnos</Text>  
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  },

});
