import React from "react";
import { useSelector } from "react-redux";
import Moviecard from "../moviecard/moviecard";

const Movielisting = () => {
  const { movies, loading } = useSelector((state) => state.movies);

  return (
    <div>
      {loading ? (
        <div>loading.....</div>
      ) : (
        <div>
          {movies.Search &&
            movies.Search.map((movie, index) => (
              <Moviecard key={index} movie={movie} />
            ))}
        </div>
      )}
    </div>
  );
};
export default Movielisting;
