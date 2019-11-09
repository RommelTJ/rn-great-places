import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const places = useSelector(state => state.places.places);
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => {
        return (
          <PlaceItem
            title={itemData.item.title}
            address={null}
            image={null}
            onSelect={() => {
              props.navigation.navigate(
                "PlaceDetail",
                {
                  placeTitle: itemData.item.title,
                  placeId: itemData.item.id
                }
              );
            }}
          />
        );
      }}
    />
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
