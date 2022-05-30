import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsactionfunc } from "../../features/redux/action";

const Moviedetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.details);
  console.log(details);
  React.useEffect(() => {
    dispatch(detailsactionfunc(id));
  }, [dispatch, id]);
  return (
    <div className="moviesection">
      <div className="sectionleft">
        <div className="movietitle">{details.Title} </div>
        <div className="movierating">
          <span>
            IMDB Rating<i className="fa fa-star"></i> : {details.imdbRating}
          </span>
          <span>
            IMDB Votes:<i className="fa fa-thumbs-up"></i> : {details.imdbVotes}
          </span>
          <span>
            IMDB Votes:<i className="fa fa-film"></i> : {details.Runtime}
          </span>
          <span>
            IMDB Votes:<i className="fa fa-calendar"></i> : {details.Year}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Moviedetails;
