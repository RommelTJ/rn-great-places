import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from "react-native";
import Colors from "../constants/Colors";

const NewPlaceScreen = (props) => {
  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput />
        <Button title="Save Place" color={Colors.primary} onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add Place"
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;
