import React from "react";
import { IconViewImage } from "./Icons";
import { useWindowSize } from "../utils";

const PaintingPage = function (props) {

  const name = props.painting.name;
  const artistName = props.painting.artist.name;
  const artistImageURL = props.painting.artist.image;
  const images = props.painting.images.hero;
  const year = props.painting.year;
  const textDescription = props.painting.description;
  const source = props.painting.source;
  const counter = props.counter;

  function setHeroImgae(images, windowSize) {
    return windowSize.width >= 768 ? images.large : images.small
  }

  function showImageGallery() {
    props.showImageGallery();
  }

  return (
    <div className="painting-page" style={{"transform": `translateX(${counter  * -100}%)`}}>
      <div className="painting-page__wrapper">
        <div className="painting-page__image">
          <img src={setHeroImgae(images, useWindowSize())} alt={name} />
          <button onClick={() => showImageGallery(props.id)}>
            <IconViewImage />
            VIEW IMAGE
          </button>
        </div>
        <section className="painting-page__label">
          <header className="painting-info">
            <h1>{name}</h1>
            <h2>{artistName}</h2>
          </header>
          <div className="artist-image">
            <img src={artistImageURL} alt={artistName} />
          </div>
        </section>
        <section className="painting-page__description">
          <span className="painting-year" >{year}</span>
          <div className="wrapper-info">
            <p className="painting-description">{textDescription}</p>
            <a className="painting-link-go-to-source" href={source}>GO TO SOURCE</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PaintingPage;