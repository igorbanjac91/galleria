import React, { useState }  from "react";
import { IconBackButton16, IconNextButton16 } from "./Icons";
import PaintingPage from "./PaintingPage";

const Slideshow = function(props) {

  const [ currentSlide, setCurrentSlide ] = useState();

  let paintingsInfo =  props.paintingsInfo;

  let counter = 0
  function handleClickPrev() {
    let slides = document.querySelectorAll(".painting-page");
    if (counter <= 0) {
      return
    } else {
      counter--
    }
    slides.forEach(function(slide) {
      slide.style.transform = `translateX(${counter * -100}%)`;
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
      slide.style.transform = `translateX(${counter * -100}%)`;
    })
  }

  let paintingsSlides = paintingsInfo.map((painting, index) => {
    return <PaintingPage key={index} painting={painting} />
  })

  return(
    <div className="slideshow">
      <div className="slideshow__container">
        {paintingsSlides}
      </div>
      <div className="slideshow__footer">
        <div className="painting-info">
          <h3>Girl with a Pearl Earring</h3>
          <h4>Johannes Vermeer</h4>
        </div>
        <div className="buttons-slider">
          <button onClick={handleClickPrev} 
                  className="btn-prev" 
          ><IconBackButton16 />
          </button>
          <button onClick={handleClickNext} 
                  className="btn-next" 
          ><IconNextButton16 />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slideshow;