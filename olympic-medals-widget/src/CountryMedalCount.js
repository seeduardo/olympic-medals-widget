import React from 'react';
import './App.css';

function CountryMedalCount(props) {

  const flagTilesUrl = 'http://localhost:3000/flags/flagtiles/'

  return (
    <div className="CountryMedalCount">
      <ul>
        <td>
          <li>
            <img src={flagTilesUrl + "flag_tile_" + props.country + ".png"} alt={props.country}/>
          </li>
          <li>{props.country}</li>
        </td>
        <td>
          <li>{props.gold}</li>
        </td>
        <td>
          <li>{props.silver}</li>
        </td>
        <td>
          <li>{props.bronze}</li>
        </td>
        <td>
          <li>{props.gold + props.silver + props.bronze}</li>
        </td>
      </ul>
    </div>
  );
}

export default CountryMedalCount;
