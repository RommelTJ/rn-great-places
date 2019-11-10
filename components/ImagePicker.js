import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Colors from "../constants/Colors";

const ImagePicker = (props) => {

  const takeImageHandler = () => {};

  return (
    <View>
      <View>
        <Text>No image picked yet.</Text>
      </View>
      <Button title={"Take Image"} color={Colors.primary} onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImagePicker;
