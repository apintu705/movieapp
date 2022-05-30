import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsactionfunc } from "../../features/redux/action";

const Moviedetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(detailsactionfunc(id));
  }, []);
  return <div>moviedetails</div>;
};
export default Moviedetails;
