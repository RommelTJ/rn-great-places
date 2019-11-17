import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from "./navigation/PlacesNavigator";
import placesReducer from "./store/placesReducer";
import {init} from "./helpers/db";

init().then(() => {
  console.log('Initialized database');
}).catch((err) => {
  console.log('Received error: ', err);
});

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return <Provider store={store}><PlacesNavigator /></Provider>;
}
