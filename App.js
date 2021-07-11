import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from "react-native";
//expo sharing para poder compartir
import * as Sharing from 'expo-sharing';
import * as ImagePicker from "expo-image-picker";
import img from "./assets/imagen.jpg";

const App = () => {
  //separator
  const Separator = () => <View style={styles.separator} />;

  //para la imagen
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permisos = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permisos.granted === false) {
      alert("permisos requeridos");
      return;
    } //si no acepta
    const almacen = await ImagePicker.launchImageLibraryAsync();
    ///console.log(almacen.uri);
    if (almacen.cancelled === true) {
      //imagen cancela o no tomada
      return;
    }

    //console.log(camara);
    setSelectedImage({ localUri: almacen.uri });
  };

  let openCamarePickerAsync = async () => {
    let permisos = await ImagePicker.requestCameraPermissionsAsync();
    if (permisos.granted === false) {
      alert("permisos requeridos");
      return;
    } //si no acepta camara
    const camara = await ImagePicker.launchCameraAsync();
    if (camara.cancelled === true) {
      return;
    }
    //console.log(camara.uri);
    setSelectedImage({ localUri: camara.uri });
  };

  return (
    <View style={styles.vista}>
      <Text style={styles.titulo}>Hello word !</Text>
      <Text style={styles.nombre}>Julio alberto</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          style={styles.imagen}
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : "https://picsum.photos/200/300",
          }}
        ></Image>
      </TouchableOpacity>
      

      <View style={styles.vistaBoton}>
        <Button
          onPress={() => Alert.alert("hello word")}
          title="Compartir"
          style={styles.boton_learn}
        />
        <Separator />
        <Button onPress={openCamarePickerAsync} title="Abrir camara" />
      </View>
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
  vistaBoton: {
   flexDirection: 'row',
    justifyContent: 'space-between',
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
  separator: {
    marginHorizontal: 10,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
