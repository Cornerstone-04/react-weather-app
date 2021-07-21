import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../App.css';

const form = (props) => {
  return (
    <div>
      <form onSubmit={props.loadWeather}>
        <input type="text" name="city" placeholder="Choose a City..." />
        <input type="text" name="country" placeholder="Choose a Country..." />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default form;
