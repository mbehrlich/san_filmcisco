import { connect } from 'react-redux';
import Form from './form';
import { updateFilters, clearFilters } from '../actions/filter_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters) => dispatch(updateFilters(filters)),
  clearFilters: () => dispatch(clearFilters())
});

export default connect(null, mapDispatchToProps)(Form);
