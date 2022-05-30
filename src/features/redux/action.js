import { MOVIE_REQUEST, MOVIE_FAIL, MOVIE_SUCCESS } from "./const";
import axios from "axios";

export const moviesactionfunc = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_REQUEST });
    const config = { Headers: { "content-type": "application/json" } };
    const {
      data
    } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=7a5e99c0
    &s="Harry"`);
    dispatch({ type: MOVIE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_FAIL, payload: error.response.data.message });
  }
};
