import { combineReducers } from 'redux';
import LocationReducer from './location_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  locations: LocationReducer,
  filters: FilterReducer
});

export default RootReducer;
