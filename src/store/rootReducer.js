// rootReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  versions: [
    {
      id: 1,
      name: "Alpine Pure",
      price: 54700,
      image: "/images/sources-homepage/versions/ALPINE-PURE-1.png",
      couleurs: [
        { name: "Teinte spéciale Bleu Alpine", price: 1800 },
        { name: "Teinte métallisée Noir Profond", price: 840 },
        { name: "Peinture opaque Blanc Glacier", price: 0 },
      ]
    },
    {
      id: 2,
      name: "Alpine Légende",
      price: 58500,
      image: "/images/sources-homepage/versions/ALPINE-LEGENDE-1.png",
      couleurs: [
        { name: "Teinte spéciale Bleu Alpine", price: 1800 },
        { name: "Teinte métallisée Noir Profond", price: 840 },
        { name: "Peinture opaque Blanc Glacier", price: 0 },
      ]
    },
  ],
  selectedVersion: {
    id: null,
    color: 'Blue',
  },
};

const carrouselSlice = createSlice({
    name: 'carrousel',
    initialState,
    reducers: {
      selectVersion: (state, action) => {
        const selectedVersion = { ...action.payload, color: 'Bleu' }; // Assurez-vous de copier l'objet et d'initialiser la couleur
        state.selectedVersion = selectedVersion;
      },
      changeColor: (state, action) => {
        state.selectedVersion.color = action.payload;
      },
    },
  });
  
  


export const { selectVersion , changeColor} = carrouselSlice.actions;
export default carrouselSlice.reducer;
