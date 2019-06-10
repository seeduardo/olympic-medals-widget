import React, { useEffect, useState } from 'react';
import './App.css';
import MedalCountType from './MedalCountType';
import CountryFlagContainer from './CountryFlagContainer';
import CountryMedalCountContainer from './CountryMedalCountContainer';

function MedalCountTable() {

  const medalDataUrl = 'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json'
  const [medalData, setMedalData] = useState([]);

  useEffect(
    () => {
      getMedalData();
    }, []
  );

  async function getMedalData() {
    const response = await fetch(medalDataUrl);
    const medalData = await response.json();
    setMedalData(medalData);
    console.log(medalData);
  }

  return (
    <div className="MedalCountTable">
      <header>MEDAL COUNT</header>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>
              <MedalCountType/>
            </td>
          </tr>
          <tr>
            <td>
              <CountryFlagContainer/>
            </td>
            <td>
              <CountryMedalCountContainer medalData={medalData}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MedalCountTable;
