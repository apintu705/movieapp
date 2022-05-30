import React from "react";
import {settings} from "../../common/setting.js"
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "./movielisting.scss";
import Moviecard from "../moviecard/moviecard";




const Movielisting = () => {
  const { movies, loading } = useSelector((state) => state.movies);
  const { shows } = useSelector((state) => state.shows);

  

  return (
    <div className="">
      {loading ? (
        <div>loading.....</div>
      ) : (
        <>
          <div className="movielist">
            <h2>Movies</h2>
            
            <div className="cardcontainer">
              
              {movies.Search &&
                movies.Search.map((movie, index) => (
                  <Moviecard key={index} movie={movie} />
                ))}
            </div>
            
          </div>

          <div className="movielist">
            <h2>Shows</h2>
            <div className="cardcontainer">
              {shows.Search &&
                shows.Search.map((movie, index) => (
                  <Moviecard key={index} movie={movie} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Movielisting;
