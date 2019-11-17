import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import Colors from "../constants/Colors";

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(undefined);

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lon: event.nativeEvent.coordinate.longitude
    })
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) return;
    props.navigation.navigate('NewPlace', {pickedLocation: selectedLocation});
  }, [selectedLocation]);

  useEffect(() => {
    props.navigation.setParams({saveLocation: savePickedLocationHandler});
  }, [savePickedLocationHandler]);

  let markerCoordinates;
  if (selectedLocation) markerCoordinates = {
    latitude: selectedLocation.lat,
    longitude: selectedLocation.lon
  };

  return (
    <MapView style={styles.map} region={mapRegion} onPress={selectLocationHandler} >
      {markerCoordinates && <Marker title="Picked Location" coordinate={markerCoordinates} />}
    </MapView>
  );
};

MapScreen.navigationOptions = (navData) => {
  const saveLocation = navData.navigation.getParam("saveLocation");
  return {
    headerRight: (
      <TouchableOpacity style={styles.headerButton} onPress={saveLocation}>
        <Text style={styles.headerButtonText}>Save</Text>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary
  }
});

export default MapScreen;
