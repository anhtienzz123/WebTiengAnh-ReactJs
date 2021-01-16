import { configureStore } from '@reduxjs/toolkit';
import vocabularyReducer from 'features/Vocabulary/vocabularySlice';
import loginReducer from 'features/Login/loginSlice';

const rootReducer = {
    vocabulary: vocabularyReducer,
    login: loginReducer,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;