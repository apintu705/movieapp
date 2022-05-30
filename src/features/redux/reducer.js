import {
  MOVIE_REQUEST,
  MOVIE_FAIL,
  MOVIE_SUCCESS,
  SHOWS_FAIL,
  SHOWS_REQUEST,
  SHOWS_SUCCESS
} from "./const";

export const moviereducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_REQUEST:
      return {
        loading: true,
        movies: []
      };

    case MOVIE_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    case MOVIE_SUCCESS:
      return {
        loading: false,
        movies: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export const showreducer = (state = { shows: [] }, action) => {
  switch (action.type) {
    case SHOWS_REQUEST:
      return {
        loading: true,
        shows: []
      };

    case SHOWS_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    case SHOWS_SUCCESS:
      return {
        loading: false,
        shows: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
