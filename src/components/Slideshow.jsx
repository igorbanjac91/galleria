import React  from "react";
import { Link } from "react-router-dom";
import PaintingPage from "./PaintingPage";
import { IconLogo } from "./Icons";

const Slideshow = function() {

  let counter = 0
  function handleClickPrev() {
    let slides = document.querySelectorAll(".painting-page");
    if (counter <= 0) {
      return
    } else {
      counter--
    }
    slides.forEach(function(slide) {
      slide.style.left = `${counter * -100}%`;
    })
  }
  
  function handleClickNext() {
    let slides = document.querySelectorAll(".painting-page");
    if (counter >= slides.length -1) {
      return
    } else {
      counter++
    }
    slides.forEach(function(slide) {
      slide.style.left = `${counter * -100}%`;
    })
  }

  return(
    <div className="slideshow">
      <SlideshowHeader />
      <div className="slideshow__container">
        <PaintingPage number={1} />
        <PaintingPage number={2} />
        <PaintingPage number={3} />
        <PaintingPage number={4} />
        <PaintingPage number={5} />
        <PaintingPage number={6} />
        <PaintingPage number={7} />
      </div>
      <div className="buttons-slider">
        <button onClick={handleClickPrev} 
                className="btn-prev" >prev
        </button>
        <button onClick={handleClickNext} 
                className="btn-next" >next
        </button>
      </div>
    </div>
  )
}

const SlideshowHeader = function() {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <IconLogo />
            </Link>
          </li>
          <li>
            <Link to="/">stop slideshow</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Slideshow;