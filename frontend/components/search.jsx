import React from 'react';
import FormContainer from './form_container';
import MapContainer from './map_container';

const Search = () => (
  <div className="container">
    <h1>San Filmcisco</h1>
    <h3>Find filming locations in San Francisco</h3>
    <FormContainer />
    <MapContainer />
    <footer>
      Matthew Ehrlich
    </footer>
  </div>
);

export default Search;
