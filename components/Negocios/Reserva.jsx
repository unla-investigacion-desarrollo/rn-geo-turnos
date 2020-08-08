import React from "react";
import { View, StyleSheet, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";

function Reserva(props) {
  const dispatch = useDispatch();
  const infoTurno = () => {
    props.navigation.navigate("Reservar turno");
  };

  return (
    <>
        <View style={{flex:1}}>    
          <View style={styles.container_button}>
              <Button title ="Reservar turno" onPress={infoTurno} >
              </Button>
          </View>
        </View> 
    </>
  );
}

const styles = StyleSheet.create({

  container_button: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
  },
});
export default Reserva;
