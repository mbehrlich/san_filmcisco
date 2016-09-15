import { connect } from 'react-redux';
import Map from './map';
// import { updateBounds } from '../actions/filter_actions';
import { requestLocations } from '../actions/location_actions';

const mapStateToProps = (state) => ({
  locations: state.locations
});

const mapDispatchToProps = (dispatch) => ({
  requestLocations: () => dispatch(requestLocations())
  // updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
