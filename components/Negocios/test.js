<View
  style={{
    marginTop: 7,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Text
    style={{
      backgroundColor: "black",
    }}
  >
    Radio de busqueda: {kilometros}km
  </Text>
  <View style={{ flexDirection: "flex" }}>
    <Slider
      style={{
        width: "100%",
        height: 40,
      }}
      value={kilometros}
      minimumValue={0}
      maximumValue={50}
      minimumTrackTintColor="#0CA4C9"
      maximumTrackTintColor="#3e3e3e"
      thumbTintColor="white"
      onValueChange={(value) => setKilometros(parseInt(value))}
    />
  </View>
</View>;
