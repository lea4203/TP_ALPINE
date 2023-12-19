// store.js
import { configureStore } from '@reduxjs/toolkit';
import carrouselReducer from './rootReducer';

const store = configureStore({
  reducer: {
    carrousel: carrouselReducer,
  },
});

export default store;
