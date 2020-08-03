import React, { Component } from "react";
import { Card, CardItem, Body, Text, Icon } from "native-base";
import { View, StyleSheet } from "react-native";
export default function CardExample() {
  return (
    <Card style={styles.cardContainer}>
      <CardItem>
        <Body>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 4 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold", color: "#777a7e" }}>
                  Lunes:
                </Text>
                <Text
                  style={{
                    color: "#c3c3c3",
                    fontSize: 12,
                    paddingLeft: 5,
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  9hs a 13hs - 16hs a 19hs
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="close"
                style={{
                  color: "#ccc",
                  fontSize: 18,
                  textAlign: "right",
                  marginRight: 0,
                }}
              />
            </View>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
});
