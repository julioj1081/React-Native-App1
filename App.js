import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import img from "./assets/imagen.jpg";
const App = () => {
  return (
    <View style={styles.vista}>
      <Text style={styles.titulo}>Hello word !</Text>
      <Image style={styles.imagen} source={img}></Image>
      <Button
        //onPress={onclick}
        onPress={() => console.log("click")}
        title="Learn More.."
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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
  },
  titulo: { lineHeight: 100, color: "black", fontSize: 25 },
  imagen: { width: 200, height: 200, borderRadius: 100 },
});

export default App;
