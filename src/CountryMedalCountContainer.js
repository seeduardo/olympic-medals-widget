import React from 'react';
import './App.css';
import CountryMedalCount from './CountryMedalCount';

function CountryMedalCountContainer({medalData}) {

  return (
    <div className="CountryMedalCountContainer">
      {medalData.slice(0, 10).map(
        countryMedalData =>
          <CountryMedalCount key={countryMedalData.code}  listPlace={medalData.indexOf(countryMedalData) + 1} country={countryMedalData.code} gold={countryMedalData.gold} silver={countryMedalData.silver} bronze={countryMedalData.bronze} />
      )}
    </div>
  );
}

export default CountryMedalCountContainer;
