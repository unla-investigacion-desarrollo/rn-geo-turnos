import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

export default function Filter() {
  const [direccion, setDireccion] = useState("");

  const dispatch = useDispatch();

  return (
    <>
      <View
        style={styles.input}
        value={direccion}
        onChangeText={(searchtext) => setDireccion(searchtext)}
      >
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faFilter}
            size={20}
            style={{ marginTop: 20, marginLeft: 5, color: "#1A73E8" }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 60,
    top: "10%",
    elevation: 8,
    borderRadius: 100,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginTop: 35,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
