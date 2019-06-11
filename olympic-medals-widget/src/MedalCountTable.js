import React, { useEffect, useState } from 'react';
import './App.css';
import MedalCountType from './MedalCountType';
import CountryFlagContainer from './CountryFlagContainer';
import CountryMedalCountContainer from './CountryMedalCountContainer';

function MedalCountTable() {

  const medalDataUrl = 'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json'
  const [medalData, setMedalData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(
    () => {
      getMedalData();
    }, []
  );

  function sortMedalData(medalData) {
    return medalData.sort(
      function(a, b) {return b.gold - a.gold}
    )

  }

  async function getMedalData() {
    setError(false);
    try {
      const response = await fetch(medalDataUrl);
      const medalData = await response.json();
      const sortedMedalData = sortMedalData(medalData)
      setMedalData(sortedMedalData);
      console.log(sortedMedalData);
    }
    catch(error) {
      setError(true);
      console.log('There has been an error fetching medal data from API - please try again')
    }
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
              {
                error && <div style={{color: `red`}}>There has been an error fetching medal data from API - please try again</div>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MedalCountTable;
