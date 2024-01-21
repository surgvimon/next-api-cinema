import { configureStore } from '@reduxjs/toolkit';
import asyncReducer from './asyncReducer';
import movieReducer from './movieReducer';

const store = configureStore({
    reducer: {
        async: asyncReducer,
        movies: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store
