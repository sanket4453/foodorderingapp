import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    collections: [],
    restaurants: [],
    restaurantMenu: [],
  },

  reducers: {
    addCollection: (state, action) => {
      if (state.collections.length === 0) {
        state.collections = action.payload;
      }
    },
    clearCollection: (state, action) => {
      state.collections.length = 0;
    },
    addRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    clearRestaurants: (state, action) => {
      state.restaurants.length = 0;
    },
    addRestaurantMenu: (state, action) => {
      state.restaurantMenu = action.payload;
    },
  },
});

export const {
  addCollection,
  clearCollection,
  addRestaurants,
  clearRestaurants,
  addRestaurantMenu,
} = foodSlice.actions;
export default foodSlice.reducer;
