import { LOCATION_CONSTANTS, receiveLocations } from '../actions/location_actions';
import { fetchLocations } from '../utils/location_util';

const LocationMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case LOCATION_CONSTANTS.REQUEST_LOCATIONS:
      success = (locations) => dispatch(receiveLocations(locations));
      let filters = getState().filters;
      fetchLocations(filters, success);
      break;
    default:
      return next(action);
  }
};

export default LocationMiddleware;
