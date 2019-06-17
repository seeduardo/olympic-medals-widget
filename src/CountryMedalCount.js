import React from 'react';
import './App.css';

function CountryMedalCount({listPlace, country, gold, silver, bronze}) {

  const flagTilesUrl = 'http://localhost:3000/flags/flagtiles/'

  return (
    <div className="CountryMedalCount">
      <div className="list-place">{listPlace}</div>
      <div className="flag"><img src={flagTilesUrl + "flag_tile_" + country + ".png"} alt={country} /></div>
      <div className="country-name">{country}</div>
      <div className="gold-medals">{gold}</div>
      <div className="silver-medals">{silver}</div>
      <div className="bronze-medals">{bronze}</div>
      <div className="total-medals">{gold + silver + bronze}</div>
    </div>
  );
}

export default CountryMedalCount;
