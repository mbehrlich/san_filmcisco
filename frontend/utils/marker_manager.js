class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.infoWindow = new google.maps.InfoWindow();
  }

  updateMarkers(locations) {
    let toAdd = this._locationsToAdd(locations);
    toAdd.forEach((location) => {
      this._createMarkerFromLocation(location);
    });
    let toRemove = this._locationsToRemove(locations);
    toRemove.forEach((marker) => {
      this._removeMarker(marker);
    });
  }

  _locationsToAdd(locations) {
    let toAdd = [];
    let add;
    locations.forEach((location) => {
      add = true;
      this.markers.forEach((marker) => {
        if (marker.locationid === location.id) {
          add = false;
        }
      });
      if (add) {
        toAdd.push(location);
      }
    });
    return toAdd;
  }

  _locationsToRemove(locations) {
    let toRemove = [];
    let remove;
    this.markers.forEach((marker) => {
      remove = true;
      locations.forEach((location) => {
        if (location.id === marker.locationid) {
          remove = false;
        }
      });
      if (remove) {
        toRemove.push(marker);
      }
    });
    return toRemove;
  }

  _createMarkerFromLocation(location) {
    let marker = new google.maps.Marker({
      position: {lat: ????, lng: ????},
      map: this.map,
      locationid: location.id
    });
    let content = `<div class='info-window'>
      <h4>Site of '${location.title}'</h4>
      <h5>Released ${location.release_year}</h5>
      <h5>Directed by ${location.director}</h5>
      <h5>Starring ${location.actor1} ${location.actor2} ${location.actor3}</h5>
      <h5>Written by ${location.writer}</h5>
      <h5>Production company: ${location.company}</h5>
      <h5>Distributed by ${location.distributor}</h5>
    </div>`
    marker.addListener("click", () => {
      this.infoWindow.setContent(content);
      this.infoWindow.open(this.map, marker);
    });
    this.marker.push(marker);
  }

  _removeMarker(marker) {
    marker.setMap(null);
    let removeIdx;
    this.markers.forEach((marker2, idx) => {
      if (marker.locationid === marker2.locationid) {
        removeIdx = idx;
      }
    });
    this.markers = this.markers.slice(0, removeIdx).concat(this.markers.slice(removeIdx + 1));
  }

}

export default MarkerManager;
