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
        {props.medalData.map(
          countryMedalData =>
          <li key={countryMedalData.code}>
            <CountryMedalCount country={countryMedalData.code} gold={countryMedalData.gold} silver={countryMedalData.silver} bronze={countryMedalData.bronze} sortMedalData={props.sortMedalData} medalData={props.medalData} setMedalData={props.setMedalData} />
          </li>
        )}
      </ol>
    </div>
  );
}

export default CountryMedalCountContainer;
