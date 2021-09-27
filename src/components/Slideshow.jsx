import React, { useEffect }  from "react";
import { IconBackButton16, IconNextButton16 } from "./Icons";
import PaintingPage from "./PaintingPage";

const Slideshow = function(props) {

  let paintingsInfo =  props.paintingsInfo;
  let counter = 0;
  let currentSlide = "painting1";
  
  useEffect(() => {
    disableButton(currentSlide);
    setProgresBar(1);
  }, []);

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
    currentSlide = `painting${counter + 1}`;
    setProgresBar(counter + 1);
    disableButton(currentSlide);
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
    currentSlide = `painting${counter + 1}`;
    setProgresBar(counter + 1);
    disableButton(currentSlide);
  }

  function disableButton(slide) {
    let btnPrev = document.querySelector(".btn-prev");
    let btnNext = document.querySelector(".btn-next");
    if (slide == "painting1") {
      btnPrev.classList.add("disabled");
      btnPrev.setAttribute("disabled", "");
    } else if (slide == "painting15") {
      btnNext.classList.add("disabled");
      btnNext.setAttribute("disabled", "");
    } else {
      btnPrev.classList.remove("disabled");
      btnPrev.removeAttribute("disabled");
      btnNext.classList.remove("disabled");
      btnNext.removeAttribute("disabled");
    }
  }

  function setProgresBar(n) {
    let bar = document.querySelector(".progress-bar");
    console.log(bar);
    console.log(n);
    if (n == 15) {
      bar.style.width = (`calc(100% / 15 * ${n} - 2px)`);
    } else {
      bar.style.width = (`calc(100% / 15 * ${n} )`);
    }
  }

  let paintingsSlides = paintingsInfo.map((painting, index) => {
    return <PaintingPage id={`painting${index}`} key={index} painting={painting} />
  })

  return(
    <div>
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
      <div className="progress-bar"></div>
    </div>
  )
}

export default Slideshow;