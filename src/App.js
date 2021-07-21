import React, { Component } from "react";
import "./App.css";
import Heading from "./components/heading";
import Form from "./components/form";
import Forecast from "./components/forecast";

const api_key = "9218e3e59d4744fa2be7916b15f7d660";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: "",
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`
    );

    // console.log(api_call);
    // console.log(city, country);

    const response = await api_call.json();
    if (city && country) {
      this.setState({
        city: response.name,
        country: response.sys.country,
        temperature: response.main.temp,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        speed: response.wind.speed,
        descirption: response.weather[0].description,
        error: "",
      });
      console.log(this.descirption)
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + response.name + "')";
        document.body.style.color = '#f4f4f4';
    } else {
      this.setState({
        error: "Please fill out input fields!",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <Heading />
        </div>
        <Form loadWeather={this.getWeather} />
        <div className="weather">
          <Forecast
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            speed={this.state.speed}
            icon={this.state.icon}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
