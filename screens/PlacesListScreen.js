import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet, Platform } from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";

const PlacesListScreen = (props) => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButtons
        title="header-right"
        HeaderButtonComponent={CustomHeaderButton}
      >
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
