import { FILTER_CONSTANTS } from '../actions/filter_actions';
import { merge } from 'lodash';

let defaultState = {
  // bounds: {
  //   southWest: {
  //     lat: 37.686859,
  //     lng: -122.544045
  //   },
  //   northEast: {
  //     lat: 37.834784,
  //     lng: -122.344575
  //   }
  // }
};

const FilterReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case FILTER_CONSTANTS.UPDATE_FILTERS:
      newState = action.filters;
      return newState;
    case FILTER_CONSTANTS.CLEAR_FILTERS:
      newState = defaultState;
      return newState;
    // case FILTER_CONSTANTS.UPDATE_BOUNDS:
    //   newState = merge({}, state);
    //   newState.bounds = action.bounds;
    //   return newState;
    default:
      return state;
  }
};

export default FilterReducer;
