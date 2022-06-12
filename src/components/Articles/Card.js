import React from "react";

const Card = (props) => {
  return (
    <div className="article-card">
      <img
        className="article-card-image"
        src={props.img}
        alt="Article image"
      ></img>

      <div className="article-card-content">
        <span className="article-card-content-title">{props.title}</span>
        <a href="#" className="article-card-content-location">
          <ion-icon name="pin"></ion-icon>
          <span className="article-text">{props.location}</span>
        </a>
        <span className="article-card-content-phone">
          <ion-icon name="call"></ion-icon>
          <span className="article-text">{props.phone}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
