import React from "react";

const Travel = props => (
  <div>
    <h1>{props.destination}</h1>
    <h3>{props.country}</h3>
    <img src={props.photo} alt={props.country} />
    <p>{props.distance}</p>
  </div>
);

export default Travel;