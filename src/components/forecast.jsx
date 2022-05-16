import React from "react";
import "../App.css";

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
      {props.temperature && <p className="deg">Temperature: {props.temperature}&deg;C</p>}

      <div className="temp">
        {props.description.charAt(0).toUpperCase() && (
          <span className="condition">{props.description}</span>
        )}
        {props.icon && (
          <span>
            <img
              src={`http://openweathermap.org/img/w/${props.icon}.png`}
              alt="weather icon"
            />
          </span>
        )}
      </div>
      <br />
      <div className="units">
        {props.humidity && <span>Humidity: {props.humidity}%</span>}
        {props.pressure && <span>Pressure: {props.pressure} hPa</span>}
        {props.speed && <span>Wind Speed: {props.speed} km/h</span>}
      </div>
    </div>
  );
};

export default Forecast;
