import React from 'react';
import MarkerManager from '../utils/marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let mapEl = document.getElementById('map');
    let options = {
      center: {lat: 37.760030, lng: -122.445329},
      zoom: 11
    }
    this.props.requestLocations();
    this.map = new google.maps.Map(mapEl, options);
    this.markerManager = new MarkerManager(this.map);
    this.markerManager.updateMarkers(this.props.locations);
    // this.map.addListener('idle', () => {
    //   let bounds = this.map.getBounds();
    //   let ne = {lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng()};
    //   let sw = {lat: bounds.getSouthWest().lat(), lng: bounds.getSouthWest().lng()};
    //   bounds = {northEast: ne, southWest: sw};
    //   this.props.updateBounds(bounds);
    // });
  }

  componentDidUpdate() {
    this.markerManager.updateMarkers(this.props.locations);
  }

  render() {
    return (
      <div id="map" className="map"></div>
    );
  }
}

export default Map;
