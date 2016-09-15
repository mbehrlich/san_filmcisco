import { FILTER_CONSTANTS } from '../actions/filter_actions';
import { requestLocations } from '../actions/location_actions';

const FilterMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    // case FILTER_CONSTANTS.UPDATE_BOUNDS:
    //   next(action);
    //   dispatch(requestLocations());
    //   break;
    case FILTER_CONSTANTS.UPDATE_FILTERS:
      next(action);
      dispatch(requestLocations());
      break;
    case FILTER_CONSTANTS.CLEAR_FILTERS:
      next(action);
      dispatch(requestLocations());
      break;
    default:
      return next(action);
  }
};

export default FilterMiddleware;
