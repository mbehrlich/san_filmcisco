import React from 'react';
import { Provider } from 'react-redux';
import Search from './search';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Search />
      </Provider>
    );
  }
}

export default Root;
