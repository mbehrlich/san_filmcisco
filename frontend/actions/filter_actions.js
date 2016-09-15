export const FILTER_CONSTANTS = {
  // UPDATE_BOUNDS: "UPDATE_BOUNDS"
  UPDATE_FILTERS: "UPDATE_FILTERS",
  CLEAR_FILTERS: "CLEAR_FILTERS"
};

export const updateFilters = (filters) => ({
  type: FILTER_CONSTANTS.UPDATE_FILTERS,
  filters
});

export const clearFilters = () => ({
  type: FILTER_CONSTANTS.CLEAR_FILTERS
});

// export const updateBounds = (bounds) => ({
//   type: FILTER_CONSTANTS.UPDATE_BOUNDS,
//   bounds
// });
