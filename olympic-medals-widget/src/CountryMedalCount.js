import React from 'react';
import './App.css';

function CountryMedalCount(props) {

  const flagTilesUrl = 'http://localhost:3000/flags/flagtiles/'

  return (
    <div className="CountryMedalCount">

        <div className="list-place">{props.listPlace}</div>
        <div className="flag"><img src={flagTilesUrl + "flag_tile_" + props.country + ".png"} alt={props.country} /></div>
        <div className="country-name">{props.country}</div>
        <div className="gold-medals">{props.gold}</div>
        <div className="silver-medals">{props.silver}</div>
        <div className="bronze-medals">{props.bronze}</div>
        <div className="total-medals">{props.gold + props.silver + props.bronze}</div>

    </div>
  );
}

export default CountryMedalCount;
