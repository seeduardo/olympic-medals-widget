import React from 'react';
import './App.css';
import CountryMedalCount from './CountryMedalCount';

function CountryMedalCountContainer(props) {

  return (
    <div className="CountryMedalCountContainer">

        {props.medalData.slice(0, 10).map(
          countryMedalData =>
          <div key={countryMedalData.code} >
            <CountryMedalCount listPlace={props.medalData.indexOf(countryMedalData) + 1} country={countryMedalData.code} gold={countryMedalData.gold} silver={countryMedalData.silver} bronze={countryMedalData.bronze} />
          </div>
        )}

    </div>
  );
}

export default CountryMedalCountContainer;
