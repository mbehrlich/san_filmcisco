export const LOCATION_CONSTANTS = {
  REQUEST_LOCATIONS: "REQUEST_LOCATIONS",
  RECEIVE_LOCATIONS: "RECEIVE_LOCATIONS"
};

export const requestLocations = () => ({
  type: LOCATION_CONSTANTS.REQUEST_LOCATIONS
});

export const receiveLocations = (locations) => ({
  type: LOCATION_CONSTANTS.RECEIVE_LOCATIONS,
  locations
});
