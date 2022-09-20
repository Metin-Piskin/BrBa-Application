import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basketSlice';
import episodeReducer from './episodeSlice';
import quoteReducer from './quoteSlice';
import deathReducer from './deathSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    episode: episodeReducer,
    quote: quoteReducer,
    death: deathReducer
  },
})