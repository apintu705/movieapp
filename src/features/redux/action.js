import {
  MOVIE_REQUEST,
  MOVIE_FAIL,
  MOVIE_SUCCESS,
  SHOWS_FAIL,
  SHOWS_REQUEST,
  SHOWS_SUCCESS
} from "./const";
import axios from "axios";

export const moviesactionfunc = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_REQUEST });

    const {
      data
    } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=7a5e99c0
    &s="Harry"&type=movie`);
    dispatch({ type: MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_FAIL, payload: error.response.data.message });
  }
};

export const showsactionfunc = (h) => async (dispatch) => {
  try {
    dispatch({ type: SHOWS_REQUEST });

    const {
      data
    } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=7a5e99c0
    &s="Friends"&type=series`);

    dispatch({ type: SHOWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOWS_FAIL, payload: error.response.data.message });
  }
};
