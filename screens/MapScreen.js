import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapScreen;
