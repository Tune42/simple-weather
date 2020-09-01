import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import {SearchBar, LoadingBar} from './bars';
import {WeatherBlock, DailyRow, HourlyRow} from './weather';
import {weather, geocode, dummydata} from './keys';
import Geocode from 'react-geocode';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather : dummydata,
      loading : true,
    };
    this.callAPI = this.callAPI.bind(this);
  }

  parseWeatherObject = data => {
    this.setState({
      weather : JSON.stringify(data),
      loading : false,
    })
  }

  async callAPI(position) {
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&APPID=${weather}`;
    let response = await fetch(apiURL);
    if (response.ok) { // if HTTP-status is 200-299
      let data = await response.json();
      this.parseWeatherObject(data);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.callAPI);
    }
  }

  getCoordinates = (location) => {
    this.setState({
      loading : true,
    });
    Geocode.setApiKey(`${geocode}`);
    Geocode.fromAddress(location).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        const position = {
          coords : {
            latitude : lat,
            longitude : lng
          }
        }
        this.callAPI(position);
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {
    const weather = JSON.parse(this.state.weather);
    return (
      <div className='page'>
        <h1 className='title is-1'>Simple Weather</h1>
        <SearchBar getCoordinates={this.getCoordinates} />
        <LoadingBar loading={this.state.loading} />
        <span className={this.state.loading ? 'hide-weather' : ''}>
        <WeatherBlock weather={weather} />
        <h2 className='title is-3 forecast-title'>5-Hour Forecast</h2>
        <HourlyRow weather={weather} />
        <h2 className='title is-3 forecast-title'>5-Day Forecast</h2>
        <DailyRow weather={weather} />
        <br />
        <br />
        </span>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
