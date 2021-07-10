import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.vista}>
      <Text style={styles.titulo}>Hello word 😶!</Text>
      <Image
        style={styles.imagen}
        source="https://picsum.photos/id/237/200/300"
      ></Image>
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
  titulo: { lineHeight: 100, color: "black", fontSize: 15 },
  imagen: { width: 500, height: 500 },
});

export default App;
