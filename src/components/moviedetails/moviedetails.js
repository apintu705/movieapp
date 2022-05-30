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
  return <div>moviedetails</div>;
};
export default Moviedetails;
