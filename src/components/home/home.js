import axios from "axios";
import React from "react";
import "./home.scss";
import Movielisting from "../movielisting/movielisting";
import { useDispatch, useSelector } from "react-redux";
import { moviesactionfunc } from "../../features/redux/action";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(moviesactionfunc());
  }, [dispatch]);
  return (
    <div>
      <div className="bannerimage"></div>
      <Movielisting />
    </div>
  );
};
export default Home;
