import React from "react";
import "../styles/Card.css";
import "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div className="card">
      <img src={`../asstes/${props.imageUrl}`} className="card-image" />
      <div className="card-header">
        <FontAwesomeIcon icon={faLocationDot} />
        <p className="location">{props.location}</p>
        <a className="map-link" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
      </div>
      <div className="card-body">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card-para">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
