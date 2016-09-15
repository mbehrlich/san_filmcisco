export const fetchLocations = (filters, success) => {
  $.ajax({
    url: 'api/locations',
    method: "GET",
    data: {filter: filters},
    success
  });
};
