// rootReducer.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    versions: [
      {
        id: 1,
        name: "Alpine Pure",
        price: 58000,
        image: "/images/sources-homepage/versions/ALPINE-PURE-1.png"

      },
      {
        id: 2,
        name: "Alpine Légende",
        price: 61000,
        image: "/images/sources-homepage/versions/ALPINE-LEGENDE-1.png",      },
    ],
    selectedVersion: null,
  };
  

const carrouselSlice = createSlice({
  name: 'carrousel',
  initialState,
  reducers: {
    selectVersion: (state, action) => {
      state.selectedVersion = action.payload;
    },
  },
});

export const { selectVersion } = carrouselSlice.actions;
export default carrouselSlice.reducer;
