import {ADD_PLACE, SET_PLACES} from "./placesActions";
import Place from "../models/place";

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const place = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.image
      );
      return {places: state.places.concat(place)};
    case SET_PLACES:
      return {places: action.places.map(p => new Place(p.id.toString(), p.title, p.imageUri))};
    default:
      return state;
  }
}
