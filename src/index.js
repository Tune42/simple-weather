import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import {SearchBar, LoadingBar} from './bars';
import {WeatherBlock, HourlyRow, DailyRow} from './weather';
import Geocode from 'react-geocode';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current : '',
      hourly : [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']],
      daily : [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']],
      loading : true,
    };
    this.callAPI = this.callAPI.bind(this);
  }

  parseWeatherObject = data => {
    console.log(data);
    this.setState({
      current : [`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`, data.current.weather[0].description, data.current.temp, data.current.feels_like],
      hourly : [[`http://openweathermap.org/img/wn/${data.hourly[1].weather[0].icon}@2x.png`, data.hourly[1].weather[0].description, data.hourly[1].temp, data.hourly[1].feels_like], [`http://openweathermap.org/img/wn/${data.hourly[2].weather[0].icon}@2x.png`, data.hourly[2].weather[0].description, data.hourly[2].temp, data.hourly[2].feels_like], [`http://openweathermap.org/img/wn/${data.hourly[3].weather[0].icon}@2x.png`, data.hourly[3].weather[0].description, data.hourly[3].temp, data.hourly[3].feels_like], [`http://openweathermap.org/img/wn/${data.hourly[4].weather[0].icon}@2x.png`, data.hourly[4].weather[0].description, data.hourly[4].temp, data.hourly[4].feels_like], [`http://openweathermap.org/img/wn/${data.hourly[5].weather[0].icon}@2x.png`, data.hourly[5].weather[0].description, data.hourly[5].temp, data.hourly[5].feels_like]],
      daily : [[`http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`, data.daily[1].weather[0].description, data.daily[1].temp.day], [`http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`, data.daily[2].weather[0].description, data.daily[2].temp.day], [`http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`, data.daily[3].weather[0].description, data.daily[3].temp.day], [`http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`, data.daily[4].weather[0].description, data.daily[4].temp.day], [`http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png`, data.daily[5].weather[0].description, data.daily[5].temp.day]],
      loading : false,
    })
  }

  async callAPI(position) {
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&APPID=b582138cf158eb5c64ca8b60a8d81fe1`;
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
    Geocode.setApiKey('AIzaSyDGHeqdv-VNFfrp4hsC6lB6AoXQtZD7oTY');
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
    return (
      <div className='page'>
        <h1 className='title is-1'>Simple Weather</h1>
        <SearchBar getCoordinates={this.getCoordinates} />
        <LoadingBar loading={this.state.loading} />
        <span className={this.state.loading ? 'hide-weather' : ''}>
        <WeatherBlock icon={this.state.current[0]} 
        description={this.state.current[1]} 
        temperature={this.state.current[2]}
        feelsLike={this.state.current[3]} />
        <h2 className='title is-3 forecast-title'>5-Hour Forecast</h2>
        <HourlyRow data={this.state.hourly} />
        <h2 className='title is-3 forecast-title'>5-Day Forecast</h2>
        <DailyRow data={this.state.daily} />
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
