import React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import img from "./assets/imagen.jpg";
const App = () => {
  return (
    <View style={styles.vista}>
      <Text style={styles.titulo}>Hello word !</Text>
      <Text style={styles.nombre}>Julio alberto</Text>
      <Image style={styles.imagen} source={img}></Image>
      <Button
        onPress={onclick}
        //onPress={() => Alert.alert("hello word")}
        title="Wellcome"
        style={styles.boton_learn}
      />
    </View>
  );
};

//esto es como css
const styles = StyleSheet.create({
  vista: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 100,
  },
  titulo: { lineHeight: 80, color: "black", fontSize: 25 },
  nombre: { color: "gray", marginBottom: 20 },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 40,
  },
  boton_learn: { backgroundColor: "#000", color: "red" },
});

function onclick() {
  alert("hello word!");
}

export default App;
