import axios from "axios";
import React from "react";
import "./home.scss";
import Movielisting from "../movielisting/movielisting";

const Home = () => {
  React.useEffect(() => {
    const fetchdata = async () => {
      const {
        data
      } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=7a5e99c0
      &s="Harry"`);
      console.log(data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <div className="bannerimage"></div>
      <Movielisting />
    </div>
  );
};
export default Home;
