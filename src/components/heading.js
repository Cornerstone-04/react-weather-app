import React from "react";
import '../App.css'
import ReactLogo from '../logo.svg'

const heading = () => {
  return (
    <div className="header">
      <div className="app-info">
        <img src={ReactLogo} alt="weatherly logo"/>
        
        <h1>
          Weatherly&trade;
        </h1>
      </div>
      <h2>What's the Weather Like Today?</h2>
    </div>
  );
};

export default heading;
