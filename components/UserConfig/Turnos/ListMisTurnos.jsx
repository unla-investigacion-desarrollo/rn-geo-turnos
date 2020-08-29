import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapMarkerAlt,
  faTimes,
  faPhone,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

export default function ListMisTurnos(props) {
  const [tabSeleccionado, setTabSeleccionado] = useState(0);
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <View
          style={{
            hminHight: 90,
            backgroundColor: "rgba(0, 0, 0, 0.62)",
            borderRadius: 5,
            marginBottom: 5,
          }}
        >
          <Text style={{ padding: 10, color: "white", fontSize: 18 }}>
            Negocio: ** Nombre del Negocio **
          </Text>
          <View
            style={{
              padding: 10,
              paddingTop: 0,
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "white", fontSize: 15, flex: 2 }}>
              Horario: 21/12/1995 14:30
            </Text>
            <Text
              style={{
                color: "yellow",
                fontWeight: "bold",
                fontSize: 15,
                flex: 1,
              }}
            >
              Pendiente
            </Text>
          </View>
          <View style={{ padding: 10, flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  size={35}
                  style={{ color: "white" }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size={35}
                  style={{ color: "#4284ff" }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faTimes}
                  size={35}
                  style={{ color: "#ff2e2e" }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faPhone}
                  size={35}
                  style={{ color: "white" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({});
