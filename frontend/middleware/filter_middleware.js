import { FILTER_CONSTANTS } from '../actions/filter_actions';

const FilterMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    default:
      return next(action);
  }
};

export default FilterMiddleware;
