import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import MapPreview from "../components/MapPreview";

const PlaceDetailScreen = (props) => {
  const placeId = props.navigation.getParam("placeId");
  const selectedPlace = useSelector((state) => state.places.places.find(p => p.id === placeId));

  return (
    <ScrollView>
      <Image source={{uri: selectedPlace.imageUri}} />
      <View>
        <View>
          <Text>{selectedPlace.address}</Text>
        </View>
        <MapPreview location={{lat: selectedPlace.lat, lon: selectedPlace.lon}} />
      </View>
    </ScrollView>
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle')
  }
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
