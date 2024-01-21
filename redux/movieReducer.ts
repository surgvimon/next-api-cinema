import { createSlice } from '@reduxjs/toolkit';

const movieReducer = createSlice ({
    name: "movies",
    initialState: {
        lists: [],
        page: 1,
        totalPages: 0,
        movieType: 'now_playing',
        movieTypeName: 'Now Playing',
        searchQueryValue: '',
        isOverlayOpen: false,
        searchResultValue : [],
        movie: []
    },
    reducers: {
        listenToMovies: (state, action) => {
            state.lists = action.payload;
        },
        responsePage: (state, action) => {
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
        },
        loadMoreResults: (state:any, action) => {
            state.lists = [...state.lists, ...action.payload];
            state.page = action.payload.page;
            state.totalPages = action.payload.total_pages;
            // console.log(...action.payload)
        },
        movieType: (state, action) => {
            state.movieType = action.payload.type;
            state.movieTypeName = action.payload.name;
        },
        setSearchQuery: (state, action) => {
            state.searchQueryValue = action.payload;
        },
        setSearchResult: (state, action) => {
            state.searchResultValue = action.payload;
        },
        openOverlay: (state, action) => {
            state.isOverlayOpen = action.payload.status;
        },
        movieDetails: (state, action) => {
            state.movie = action.payload;
        },
        CLEAR_MOVIE_DETAILS: (state) => {
            state.movie = [];
        },
    },
});
export const { 
    openOverlay, 
    CLEAR_MOVIE_DETAILS, 
    movieDetails, 
    listenToMovies, 
    responsePage, 
    loadMoreResults, 
    movieType, 
    setSearchQuery, 
    setSearchResult 
} = movieReducer.actions;
export default movieReducer.reducer;
