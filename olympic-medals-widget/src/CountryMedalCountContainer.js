import React from 'react';
import './App.css';
import CountryMedalCount from './CountryMedalCount';

function CountryMedalCountContainer(props) {

  // function handleClick(e) {
  //   console.log(e.target.innerText.toLowerCase())
  //   const sortedMedalData = props.sortMedalData(props.medalData, e.target.innerText.toLowerCase());
  //   props.setMedalData(sortedMedalData);
  // }

  return (
    <div className="CountryMedalCountContainer">
      <ol>
        {props.medalData.slice(0, 10).map(
          countryMedalData =>
          <li key={countryMedalData.code}>
            <CountryMedalCount country={countryMedalData.code} gold={countryMedalData.gold} silver={countryMedalData.silver} bronze={countryMedalData.bronze} />
          </li>
        )}
      </ol>
    </div>
  );
}

export default CountryMedalCountContainer;