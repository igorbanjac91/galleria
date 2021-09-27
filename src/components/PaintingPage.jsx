import React from "react";
import { IconViewImage } from "./Icons";

const PaintingPage = function(props) {

  const name = props.painting.name;
  const artistName = props.painting.artist.name;
  const artistImageURL = props.painting.artist.image;
  const imageURL = props.painting.images.hero.small;
  const year = props.painting.year;
  const textDescription = props.painting.description;
  const source = props.painting.source;
  

  return (
    <div className="painting-page">
      <div className="painting-page__wrapper">
        <div className="painting-page__image">
          <img src={imageURL} alt={name} />
          <button>
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
          <p className="painting-description">{textDescription}</p>
          <a className="painting-link-go-to-source" href={source}>GO TO SOURCE</a>
        </section>
      </div>
    </div>
  )
}

export default PaintingPage;