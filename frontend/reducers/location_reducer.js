import { LOCATION_CONSTANTS } from '../actions/location_actions';
import { merge } from 'lodash';

const LocationReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case LOCATION_CONSTANTS.RECEIVE_LOCATIONS:
      newState = action.locations;
      return newState;
    default:
      return state;
  }
};

export default LocationReducer;
