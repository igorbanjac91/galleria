import React, { useEffect, useState }  from "react";
import { useWindowSize } from "../utils";
import { IconBackButton16, IconBackButton24, IconNextButton16, IconNextButton24 } from "./Icons";
import PaintingPage from "./PaintingPage";

const Slideshow = function(props) {

  let paintingsInfo =  props.paintingsInfo;
  const [ counter, setCounter ] = useState(0);
  const [ currentPainting, setCurrentPainting ] = useState(paintingsInfo[counter]);
  let currentSlide = `painting${counter}`;

  useEffect(() => {
    disableButton(currentSlide);
    setProgresBar(counter + 1);
    setCurrentPainting(paintingsInfo[counter]);
  }, [counter]);

  function handleClickPrev() {
    if (counter > 0) setCounter(counter - 1);
  }
  
  function handleClickNext() {
    if (counter < 14) setCounter(counter + 1)
  }

  function disableButton(slide) {
    let btnPrev = document.querySelector(".btn-prev");
    let btnNext = document.querySelector(".btn-next");
    if (slide == "painting0") {
      btnPrev.classList.add("disabled");
      btnPrev.setAttribute("disabled", "");
    } else if (slide == "painting14") {
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
    if (n == 15) {
      bar.style.width = (`calc(100% / 15 * ${n} - 2px)`);
    } else {
      bar.style.width = (`calc(100% / 15 * ${n} )`);
    }
  }

  let paintingsSlides = paintingsInfo.map((painting, index) => {
    return <PaintingPage id={`painting${index}`} 
                         key={index} 
                         painting={painting} 
                         counter={counter}
                         showImageGallery={showImageGallery} />
  })

  function showImageGallery() {
    let body = document.querySelector('body');
    body.classList.add("shadow");
    let container = document.querySelector(`.image-gallery`)
    container.style.display = "block";
  }

  function hideGallery() {
    let container = document.querySelector(`.image-gallery`)
    container.style.display = "none";
    let body = document.querySelector('body');
    body.classList.remove("shadow");
  }

  return(
    <div className="page-wrapper">
      <div className="slideshow">
        <div className="slideshow__container">
          {paintingsSlides}
        </div>
        <div className="slideshow__footer">
          <div className="painting-info">
            <h3>{currentPainting.name}</h3>
            <h4>{currentPainting.artist.name}</h4>
          </div>
          <div className="buttons-slider">
            <button onClick={handleClickPrev} 
                    className="btn-prev"  
            >
            { useWindowSize().width >= 768
              ? <IconBackButton24 />
              : <IconBackButton16 />
            }
            </button>
            <button onClick={handleClickNext} 
                    className="btn-next" 
            >
            { useWindowSize().width >= 768
              ? <IconNextButton24 />
              : <IconNextButton16 />
            }
            </button>
          </div>
        </div>
      </div>
      <div className="progress-bar"></div>
      <div className={`image-gallery`}>
        <div className="image-gallery__container">
          <a href="#" 
              className="link-close"
              onClick={() => hideGallery(counter)}>close</a>
          <img src={currentPainting.images.gallery} 
               alt={currentPainting.name} />
        </div>
      </div>
    </div>
  )
}

export default Slideshow;