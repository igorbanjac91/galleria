import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { IconLogo32, IconLogo48 } from "./Icons";
import { useWindowSize } from "../utils";

const Header = function() {

  const [ action, setAction ] = useState("Start")
  const location = useLocation();
  const currentPath =  location.pathname;

  useEffect(() => {
    setUpAction();
  }, [location]) 

  function setUpAction() {
    const action = currentPath === "/" ? "Start" : "Stop";
    setAction(action);
  }
  
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <Link to="/">
              { useWindowSize().width >= 768
              ? <IconLogo48 />
              : <IconLogo32 />
              }
            </Link>
          </li>
          { currentPath === "/" ? 
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