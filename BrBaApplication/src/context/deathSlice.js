import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    deaths: [],
}

export const deathSlice = createSlice({
    name: 'death',
    initialState,
    reducers: {
        addToDeath: (state, action) => {
            state.deaths = [...state.deaths, action.payload];
        },
        removeFromDeath: (state, action) => {
            const index = state.deaths.findIndex((item) => item.id === action.payload.id);


            let newDeath = [...state.deaths];

            if (index >= 0) {
                newDeath.splice(index, 1);
            } else {
                console.warn(
                    'Cant remove product (id: ${action.payload.id}) as its not in basket!'
                );
            }
            state.deaths = newDeath;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToDeath, removeFromDeath } = deathSlice.actions

export const selectDeathItems = (state) => state.death.deaths;


export default deathSlice.reducer