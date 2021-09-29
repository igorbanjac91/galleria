import React from "react";
import { Link } from "react-router-dom";

const Home = props => {

  const paintingsInfo = props.paintingsInfo;

  return (
    <div className="home">
      <PaintingCardsContainer paintingsInfo={paintingsInfo} />
    </div>
  )
}


const PaintingCardsContainer = props => {
  
  const paintingsInfo = props.paintingsInfo;

  const listCards = paintingsInfo.map( (info, index) => {
    return <PaintingCard key={index} number={index} infoPainting={info} />
  })

  return (
    <ul className="home__painting-cards-container">
      {listCards}
    </ul>
  )
}


const PaintingCard = (props) => {
  
  const infoPainting = props.infoPainting;

  function scrollToTopPage() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <li className="painting-card">
      <Link to={`/slideshow?=number${props.number}`} onClick={scrollToTopPage}>
        <img  src={infoPainting.images.thumbnail} alt={infoPainting.name} />
        <div className="card-info">
          <h2>{infoPainting.name}</h2>
          <h3>{infoPainting.artist.name}</h3>
        </div>
      </Link>
    </li>
  )
}

export default Home;