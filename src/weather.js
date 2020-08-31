import React from 'react';

function WeatherBlock(props) {
    return (
      <div className='weather-block'>
        <h2 className='title is-3'>Current Weather</h2>
        <img src={props.icon} alt='weather icon' />
        <div>{props.description}</div>
        <div>{props.temperature} F</div>
        <div>feels like {props.feelsLike}</div>
      </div>
    )
}

function HourlyRow(props) {
    return (
      <div className='weather-row'>
        <div className='row-block'>
          <div></div>
          <img src={props.data[0][0]} alt='weather icon' />
          <div>{props.data[0][1]}</div>
          <div>{props.data[0][2]} F</div>
          <div>feels like {props.data[0][3]}</div>
        </div>
        <div className='row-block'>
          <img src={props.data[1][0]} alt='weather icon' />
          <div>{props.data[1][1]}</div>
          <div>{props.data[1][2]} F</div>
          <div>feels like {props.data[1][3]}</div>
        </div>
        <div className='row-block'>
          <img src={props.data[2][0]} alt='weather icon' />
          <div>{props.data[2][1]}</div>
          <div>{props.data[2][2]} F</div>
          <div>feels like {props.data[2][3]}</div>
        </div>
        <div className='row-block'>
          <img src={props.data[3][0]} alt='weather icon' />
          <div>{props.data[3][1]}</div>
          <div>{props.data[3][2]}F</div>
          <div>feels like {props.data[3][3]}</div>
        </div>
        <div className='row-block'>
          <img src={props.data[4][0]} alt='weather icon' />
          <div>{props.data[4][1]}</div>
          <div>{props.data[4][2]} F</div>
          <div>feels like {props.data[4][3]}</div>
        </div>
      </div>
    )
}

function DailyRow(props) {
    return (
      <div className='weather-row'>
        <div className='row-block'>
          <div></div>
          <img src={props.data[0][0]} alt='weather icon' />
          <div>{props.data[0][1]}</div>
          <div>Average: {props.data[0][2]} F</div>
        </div>
        <div className='row-block'>
          <img src={props.data[1][0]} alt='weather icon' />
          <div>{props.data[1][1]}</div>
          <div>Average: {props.data[1][2]} F</div>
        </div>
        <div className='row-block'>
          <img src={props.data[2][0]} alt='weather icon' />
          <div>{props.data[2][1]}</div>
          <div>Average: {props.data[2][2]} F</div>
        </div>
        <div className='row-block'>
          <img src={props.data[3][0]} alt='weather icon' />
          <div>{props.data[3][1]}</div>
          <div>Average: {props.data[3][2]} F</div>
        </div>
        <div className='row-block'>
          <img src={props.data[4][0]} alt='weather icon' />
          <div>{props.data[4][1]}</div>
          <div>Average: {props.data[4][2]} F</div>
        </div>
      </div>
    )
}

export {WeatherBlock, HourlyRow, DailyRow};