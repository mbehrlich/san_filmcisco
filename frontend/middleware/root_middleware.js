import { applyMiddleware } from 'redux';
import LocationMiddleware from './location_middleware';
import FilterMiddleware from './filter_middleware';

const RootMiddleware = applyMiddleware(
  LocationMiddleware,
  FilterMiddleware
);

export default RootMiddleware;
