import { createSlice } from "@reduxjs/toolkit";

const propertiesReducer = createSlice({
  name: "properties",
  initialState: {
    properties: [
      {
        key: 1,
        address: "Address 1",
        postcode: "Postcode 1",
        propertytype: "Terraced House",
        rooms: 2,
        area: 40,
      },
      {
        key: 3,
        address: "Address 3",
        postcode: "Postcode 3",
        propertytype: "Flat",
        rooms: 4,
        area: 55,
      },
      {
        key: 4,
        address: "Address 4",
        postcode: "Postcode 4",
        propertytype: "Semi-detached",
        rooms: 5,
        area: 14,
      },
      {
        key: 5,
        address: "Address 5",
        postcode: "Postcode 5",
        propertytype: "Flat",
        rooms: 6,
        area: 36,
      },
      {
        key: 6,
        address: "Address 6",
        postcode: "Postcode 6",
        propertytype: "Flat",
        rooms: 7,
        area: 1,
      },
      {
        key: 7,
        address: "Address 7",
        postcode: "Postcode 7",
        propertytype: "Terraced House",
        rooms: 8,
        area: 49,
      },
      {
        key: 8,
        address: "Address 8",
        postcode: "Postcode 8",
        propertytype: "Property type 8",
        rooms: 9,
        area: 85,
      },
      {
        key: 9,
        address: "Address 9",
        postcode: "Postcode 9",
        propertytype: "Semi-detached",
        rooms: 10,
        area: 84,
      },
    ],
    selectedProperties: [],
    searchWord: '',
    selectedType: 'All'
  },
  reducers: {
    setSelectedProperties: (state, action) => {
      state.selectedProperties = action.payload;
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload
    }
  },
});

const { actions, reducer } = propertiesReducer;

export const { setSelectedProperties,setSearchWord, setSelectedType } = actions;

export default reducer;
