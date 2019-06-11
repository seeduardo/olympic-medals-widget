import React from 'react';
import './App.css';
import CountryMedalCount from './CountryMedalCount';

function CountryMedalCountContainer(props) {
  return (
    <div className="CountryMedalCountContainer">
      <ul>
        {props.medalData.map(
          countryMedalData =>
          <li key={countryMedalData.code}>
            <CountryMedalCount country={countryMedalData.code} gold={countryMedalData.gold} silver={countryMedalData.silver} bronze={countryMedalData.bronze} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default CountryMedalCountContainer;
