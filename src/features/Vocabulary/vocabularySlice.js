import { createSlice } from '@reduxjs/toolkit';

const initialVocabulary = {

};

const vocabulary = createSlice({

    name: 'vocabulary',
    initialState: initialVocabulary,
    reducers: {

        getVocabulary: (state, action) => {

            state = action.payload;

            return state;
        }
    }
});

const { reducer, actions } = vocabulary;
export const { getVocabulary } = actions;

export default reducer;

