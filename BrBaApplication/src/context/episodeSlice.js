import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  episodes: [],
}

export const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    addToEpisode: (state, action) => {
      state.episodes = [...state.episodes, action.payload];
    },
    removeFromEpisode: (state, action) => {
      const index = state.episodes.findIndex((item) => item.id === action.payload.id);


      let newEpisode = [...state.episodes];

      if (index >= 0) {
        newEpisode.splice(index, 1);
      } else {
        console.warn(
          'Cant remove product (id: ${action.payload.id}) as its not in basket!'
        );
      }
      state.episodes = newEpisode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToEpisode, removeFromEpisode } = episodeSlice.actions

export const selectEpisodeItems = (state) => state.episode.episodes;


export default episodeSlice.reducer