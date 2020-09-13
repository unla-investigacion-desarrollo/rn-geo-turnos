import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";

export default function ToastrWarning({ message, cerrarToastr }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 70,
        width: "100%",
        borderRadius: 10,
        borderLeftWidth: 6,
        elevation: 20,
        borderLeftColor: "#ffd24d",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 2,
          width: 1,
        },
      }}
    >
      <View style={{ flexDirection: "row", height: 70 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            size={30}
            color="#ffd24d"
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",

            width: "70%",
          }}
        >
          <Text style={{ color: "#ffd24d", fontWeight: "bold" }}>
            {message}
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={cerrarToastr}
            style={{
              height: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faTimes} size={17} color="#ccc" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
