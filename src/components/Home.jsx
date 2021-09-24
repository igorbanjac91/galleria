import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

const Home = function() {

  const [ paintingsInfo, setPaintingsInfo ] = useState({});

  useEffect(() => {
    fetchPaintingsInfo();
  }, []) 


  function fetchPaintingsInfo() {
    axios 
      .get("data.json")
      .then( response => {
        setPaintingsInfo(response.data);
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div className="home">
    </div>
  )
}

export default Home;