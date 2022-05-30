import React from "react";
import { useSelector } from "react-redux";
import "./movielisting.scss";
import Moviecard from "../moviecard/moviecard";

const Movielisting = () => {
  const { movies, loading } = useSelector((state) => state.movies);

  return (
    <div className="">
      {loading ? (
        <div>loading.....</div>
      ) : (
        <div className="movielist">
          <h2>Movies</h2>
          <div className="cardcontainer">
            {movies.Search &&
              movies.Search.map((movie, index) => (
                <Moviecard key={index} movie={movie} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Movielisting;
