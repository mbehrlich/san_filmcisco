import { LOCATION_CONSTANTS } from '../actions/location_actions';

const LocationMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    default:
      return next(action);
  }
};

export default LocationMiddleware;
