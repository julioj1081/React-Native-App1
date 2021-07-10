import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.vista}>
      <Text style={styles.titulo}>Hello word !</Text>
    </View>
  );
};

//esto es como css
const styles = StyleSheet.create({
  vista: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  titulo: { lineHeight: 100, color: "white", fontSize: 15 },
});

export default App;
