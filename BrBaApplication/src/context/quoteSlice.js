import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quotes: [],
}

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        addToQuote: (state, action) => {
            state.quotes = [...state.quotes, action.payload];
        },
        removeFromQuote: (state, action) => {
            const index = state.quotes.findIndex((item) => item.id === action.payload.id);


            let newQuote = [...state.quotes];

            if (index >= 0) {
                newQuote.splice(index, 1);
            } else {
                console.warn(
                    'Cant remove product (id: ${action.payload.id}) as its not in basket!'
                );
            }
            state.quotes = newQuote;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToQuote, removeFromQuote } = quoteSlice.actions

export const selectQuoteItems = (state) => state.quote.quotes;


export default quoteSlice.reducer