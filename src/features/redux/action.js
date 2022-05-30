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

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7a5e99c0
    &s="Harry"&type=movie`);
    dispatch({ type: MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_FAIL, payload: error.response.data.message });
  }
};

export const showsactionfunc = () => async (dispatch) => {
  try {
    dispatch({ type: SHOWS_REQUEST });

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7a5e99c0
    &s="Friends"&type=series`);

    dispatch({ type: SHOWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOWS_FAIL, payload: error.response.data.message });
  }
};
export const detailsactionfunc = (id) => async (dispatch) => {
  try {
    dispatch({ type: SHOWS_REQUEST });

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7a5e99c0
    &${id}&plot=Full`);

    dispatch({ type: SHOWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHOWS_FAIL, payload: error.response.data.message });
  }
};
