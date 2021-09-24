import React, { useState, useEffect } from "react";
import { 
  BrowserRouter as Router, 
  Switch,
  Route 
} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Slideshow from "./components/Slideshow";

function App() {

  const [ paintingsInfo, setPaintingsInfo ] = useState([]);

  useEffect(() => {
    fetchPaintingsInfo();
  }, []) 


  function fetchPaintingsInfo() {
    axios 
      .get("data.json")
      .then( response => {
        setPaintingsInfo(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home paintingsInfo={paintingsInfo} />
        </Route>
        <Route exact path="/slideshow">
          <Slideshow paintingsInfo={paintingsInfo} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
