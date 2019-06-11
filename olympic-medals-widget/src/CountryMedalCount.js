import React from 'react';
import './App.css';

function CountryMedalCount(props) {
  return (
    <div className="CountryMedalCount">
      <ul>
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
