import {ADD_PLACE} from "./placesActions";
import Place from "../models/place";

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const place = new Place(new Date().toString(), action.placeData.title, action.placeData.image);
      return {places: state.places.concat(place)};
    default:
      return state;
  }
}
