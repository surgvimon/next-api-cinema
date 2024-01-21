import { 
  asyncActionError, 
  asyncActionFinish, 
  asyncActionStart 
} from "@/redux/asyncReducer";
import { 
  openOverlay,
  CLEAR_MOVIE_DETAILS,
  listenToMovies, 
  loadMoreResults, 
  movieDetails, 
  movieType, 
  responsePage, 
  setSearchQuery,
  setSearchResult
} from "@/redux/movieReducer";
import { 
  MOVIE_API_URL, 
  SEARCH_API_URL, 
  MOVIE_DETAILS_URL, 
  MOVIE_CREDITS_URL, 
  MOVIE_IMAGES_URL, 
  MOVIE_VIDEOS_URL, 
  MOVIE_REVIEWS_URL, 
} from "@/services/movies.service"

export const getMovies = async (type:any, pageNumber:any, dispatch:any) => {
  dispatch(asyncActionStart());
  try {
    const response = await getMoviesRequest(type, pageNumber);
    const { results, page, total_pages } = response;
    dispatch(listenToMovies(results))
    dispatch(responsePage({page, total_pages}))
    setTimeout(() => {
      dispatch(asyncActionFinish());
    }, 1000)
  } catch (error) {
    dispatch(asyncActionError(error));
  }
}

export const loadMoreMovies = async (type:any, pageNumber:any, dispatch:any) => {
  dispatch(asyncActionStart());
  try {
    const movies = await MOVIE_API_URL(type, pageNumber);
    const { results, page, total_pages } = movies.data;
    dispatch(loadMoreResults(results));
    dispatch(responsePage({page, total_pages}));
    setTimeout(() => {
      dispatch(asyncActionFinish());
    }, 1000)
  } catch (error) {
    dispatch(asyncActionError(error));
  }
}

export const searchResult = async (query:any, dispatch:any) => {
  // dispatch(asyncActionStart());
  try {
    if( query) {
      const movies = await SEARCH_API_URL(query);
      const { results } = movies.data;
      dispatch(setSearchResult(results));
    } else {
      dispatch(setSearchResult([]));
    }
    // setTimeout(() => {
    //   dispatch(asyncActionFinish());
    // }, 1000)
  } catch (error) {
    dispatch(asyncActionError(error));
  }
};

export const setMovieDetails = async (id:any, dispatch:any) => {
  dispatch(asyncActionStart());
  try {
    const details = await MOVIE_DETAILS_URL(id);
    const credits = await MOVIE_CREDITS_URL(id);
    const images = await MOVIE_IMAGES_URL(id);
    const videos = await MOVIE_VIDEOS_URL(id);
    const reviews = await MOVIE_REVIEWS_URL(id);
    
    const resp = await Promise.all([details, credits, images, videos, reviews])
      .then((values) => Promise.all(values.map((value) => value.data)))
      .then((response) => response);
    dispatch(movieDetails(resp));
    setTimeout(() => {
      dispatch(asyncActionFinish());
    }, 1000)

  } catch (error) {
    dispatch(asyncActionError(error));
  }
};

export const clearMovieDetails = async (dispatch:any) => {
  dispatch(CLEAR_MOVIE_DETAILS());
}
export const getMoviesRequest = async (type:any, pageNumber:any,) => {
  const movies = await MOVIE_API_URL(type, pageNumber);
  const { results, page, total_pages } = movies.data;
  return { results, page, total_pages };
};

export const setResponsePageNumber = (pageNumber:any, totalPages:any, dispatch:any) => {
  const payload= {
    page: pageNumber,
    total_pages: totalPages,
  }
  dispatch(responsePage(payload));
};

export const setMovieType = (type:any, dispatch:any) => {
  dispatch(movieType({type}));
};

export const searchQuery = (query:any, dispatch:any) => {
  dispatch(setSearchQuery({query}));
};

export const openSearchPanel = (status:any, dispatch:any) => {
  dispatch(openOverlay({status}));
};
