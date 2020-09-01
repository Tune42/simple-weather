import React from 'react';

function getDate(unixTime) {
  const date = new Date(unixTime * 1000);
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  return `${month + 1} / ${day}`;
}

function WeatherBlock(props) {
  return (
    <div className='weather-block'>
      <h2 className='title is-3'>Current Weather</h2>
      <img src={`http://openweathermap.org/img/wn/${props.weather.current.weather[0].icon}@2x.png`} alt='weather icon' />
      <div>{props.weather.current.weather[0].description}</div>
      <div>{props.weather.current.temp} F</div>
      <div>feels like {props.weather.current.feels_like}</div>
    </div>
  )
}

function HourlyRow(props) {
  const date = new Date(props.weather.current.dt * 1000);
  return (
    <div className='weather-row'>
      <div className='row-block'>
        <div>{date.getHours()+1} {(date.getHours()+1 > 12) ? 'PM' : 'AM'}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.hourly[1].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.hourly[1].weather[0].description}</div>
        <div>{props.weather.hourly[1].temp} F</div>
        <div>feels like {props.weather.hourly[1].feels_like}</div>
      </div>
      <div className='row-block'>
        <div>{date.getHours()+2} {(date.getHours()+2 > 12) ? 'PM' : 'AM'}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.hourly[2].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.hourly[2].weather[0].description}</div>
        <div>{props.weather.hourly[2].temp} F</div>
        <div>feels like {props.weather.hourly[2].feels_like}</div>
      </div>
      <div className='row-block'>
        <div>{date.getHours()+3} {(date.getHours()+3 > 12) ? 'PM' : 'AM'}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.hourly[3].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.hourly[3].weather[0].description}</div>
        <div>{props.weather.hourly[3].temp} F</div>
        <div>feels like {props.weather.hourly[3].feels_like}</div>
      </div>
      <div className='row-block'>
        <div>{date.getHours()+4} {(date.getHours()+4 > 12) ? 'PM' : 'AM'}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.hourly[4].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.hourly[4].weather[0].description}</div>
        <div>{props.weather.hourly[4].temp} F</div>
        <div>feels like {props.weather.hourly[4].feels_like}</div>
      </div>
      <div className='row-block'>
        <div>{date.getHours()+5} {(date.getHours()+5 > 12) ? 'PM' : 'AM'}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.hourly[5].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.hourly[5].weather[0].description}</div>
        <div>{props.weather.hourly[5].temp} F</div>
        <div>feels like {props.weather.hourly[5].feels_like}</div>
      </div>
    </div>
  )
}

function DailyRow(props) {
  return (
    <div className='weather-row'>
      <div className='row-block'>
        <div>{getDate(props.weather.daily[1].dt)}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.daily[1].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.daily[1].weather[0].description}</div>
        <div>{props.weather.daily[1].temp.day} F</div>
        <div>feels like {props.weather.daily[1].feels_like.day}</div>
      </div>
      <div className='row-block'>
        <div>{getDate(props.weather.daily[2].dt)}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.daily[2].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.daily[2].weather[0].description}</div>
        <div>{props.weather.daily[2].temp.day} F</div>
        <div>feels like {props.weather.daily[2].feels_like.day}</div>
      </div>
      <div className='row-block'>
        <div>{getDate(props.weather.daily[3].dt)}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.daily[3].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.daily[3].weather[0].description}</div>
        <div>{props.weather.daily[3].temp.day} F</div>
        <div>feels like {props.weather.daily[3].feels_like.day}</div>
      </div>
      <div className='row-block'>
        <div>{getDate(props.weather.daily[4].dt)}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.daily[4].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.daily[4].weather[0].description}</div>
        <div>{props.weather.daily[4].temp.day} F</div>
        <div>feels like {props.weather.daily[4].feels_like.day}</div>
      </div>
      <div className='row-block'>
        <div>{getDate(props.weather.daily[5].dt)}</div>
        <img src={`http://openweathermap.org/img/wn/${props.weather.daily[5].weather[0].icon}@2x.png`} alt='weather icon' />
        <div>{props.weather.daily[5].weather[0].description}</div>
        <div>{props.weather.daily[5].temp.day} F</div>
        <div>feels like {props.weather.daily[5].feels_like.day}</div>
      </div>
    </div>
  )
}

export {WeatherBlock, DailyRow, HourlyRow};