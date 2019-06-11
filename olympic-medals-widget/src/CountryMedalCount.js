import React from 'react';
import './App.css';

function CountryMedalCount(props) {

  const flagTilesUrl = 'http://localhost:3000/flags/flagtiles/'

  return (
    <div className="CountryMedalCount">
      <ul>
        <li><img src={flagTilesUrl + "flag_tile_" + props.country + ".png"} alt={props.country} /></li>
        <li>{props.country}</li>
        <li>{props.gold}</li>
        <li>{props.silver}</li>
        <li>{props.bronze}</li>
        <li>{props.gold + props.silver + props.bronze}</li>
      </ul>
    </div>
  );
}

export default CountryMedalCount;
