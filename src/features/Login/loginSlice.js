import { createSlice } from '@reduxjs/toolkit';

const initialLogin = {

};

const login = createSlice({

    name: 'login',
    initialState: initialLogin,
    reducers: {

        fetchUsername: (state, action) => {
            state = action.payload;

            return state;
        }
    }
});

const { reducer, actions } = login;
export const { fetchUsername } = actions;

export default reducer;

