import React from "react";
import '../App.css'

const Forecast = (props) => {
  return (
    <div className="weather">
        <div className="location">
          {props.country && props.city && (
            <h3>
              Weather in {props.city}, {props.country}.
            </h3>
          )}
        </div>
        {props.temperature && (
          <p>
            Temperature: {props.temperature}&deg;C
          </p>)}

      <div className="temp">
      {props.description.charAt(0).toUpperCase() && 
        <p className="condition">
          {props.description}
        </p> }
        {props.icon && (
          <p>
            <img
              src={`http://openweathermap.org/img/w/${props.icon}.png`}
              alt="weather icon"
            />
          </p>
        )}
      </div>
            </div>
  
  );
};

export default Forecast;
