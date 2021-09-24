import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { IconLogo } from "./Icons";

const Header = function() {

  const [ action, setAction ] = useState("Start")
  const location = useLocation();
  const currentPath =  location.pathname;

  useEffect(() => {
    setUpAction();
  }, [location]) 

  function setUpAction() {
    const action = currentPath == "/" ? "Start" : "Stop";
    setAction(action);
  }

  
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <IconLogo />
            </Link>
          </li>
          { currentPath == "/" ? 
          <li>
            <Link to="/slideshow">{action} slideshow</Link>
          </li>
          :
          <li>
            <Link to="/">{action} slideshow</Link>
          </li>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;