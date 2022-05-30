import React from "react";
import "./moviecard.scss";

const Moviecard = ({ movie }) => {
  return (
    <div className="carditem">
      <div className="cardinner">
        <div className="cardtop">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="cardbottom">
          <div className="cardinfo">
            <h4>{movie.Title} </h4>
            <p>{movie.Year} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Moviecard;
