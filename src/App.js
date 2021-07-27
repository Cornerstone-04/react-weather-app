import React, { Component } from "react";
import "./App.css";
import Heading from "./components/heading";
import Form from "./components/form";
import Forecast from "./components/forecast";

const apiKey = "9218e3e59d4744fa2be7916b15f7d660";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    icon: "",
    speed: "",
    description: "",
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`
    );

    const response = await apiCall.json();
    if (city && country) {
      this.setState({
        city: response.name,
        country: response.sys.country,
        temperature: response.main.temp,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        speed: response.wind.speed,
        description: response.weather[0].description,
      });
      console.log(response);
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + response.name + "')";
      document.body.style.color = "#f4f4f4";
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <Heading />
        </div>
        <Form loadWeather={this.getWeather} required />
        <div className="weather">
          <Forecast
            temperature={this.state.temp erature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            speed={this.state.speed}
            icon={this.state.icon}
            description={this.state.description}
          />
        </div>
      </div>
    );
  }
}

export default App;
