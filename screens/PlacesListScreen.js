import React, { useEffect } from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import PlaceItem from "../components/PlaceItem";
import * as placesActions from "../store/placesActions";

const PlacesListScreen = (props) => {
  const places = useSelector(state => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => {
        return (
          <PlaceItem
            title={itemData.item.title}
            address={itemData.item.address}
            image={itemData.item.imageUri}
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
