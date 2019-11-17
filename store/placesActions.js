import * as FileSystem from 'expo-file-system';
import { insertPlace, fetchPlaces } from "../helpers/db";
import ENV from "../env";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lon}&key=${ENV().googleApiKey}`);
    if (!response.ok) throw new Error("Something went wrong!");
    const responseData = await response.json();

    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({from: image, to: newPath});
      const dbResult = await insertPlace(title, newPath, 'Dummy address', 15.6, 12.3);
      return { type: ADD_PLACE, placeData: { id: dbResult.insertId, title, newPath } };
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  }
};
