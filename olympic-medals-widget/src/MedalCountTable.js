import React, { useEffect, useState } from 'react';
import './App.css';
// import MedalCountType from './MedalCountType';
// import CountryFlagContainer from './CountryFlagContainer';
import CountryMedalCountContainer from './CountryMedalCountContainer';

function MedalCountTable() {

  const medalDataUrl = 'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json'
  const [activeTab, setActiveTab] = useState("gold");
  const [medalData, setMedalData] = useState([]);
  const [error, setError] = useState(false);
  const medalTabs = ["Country-Order", "Gold", "Silver", "Bronze", "Total"];

  useEffect(
    () => {
      getMedalData();
    }, []
  );

  function handleClick(event) {
    const clickedTab = event.target.id;
    setActiveTab(clickedTab);
    const sortedMedalData = sortMedalData(medalData, clickedTab);
    return setMedalData(sortedMedalData);
  }

  function sortMedalData(medalData, sortType) {
    let secondarySortType
    if (sortType === "gold"){
      secondarySortType = "silver"
    } else {
      secondarySortType = "gold"
    }
    return medalData.sort(
      function(a, b) {
        if (sortType === "total" && (a["gold"] + b["silver"] + b["bronze"]) !== (b["gold"] + b["silver"] + b["bronze"])) {
          return (b["gold"] + b["silver"] + b["bronze"]) - (a["gold"] + a["silver"] + a["bronze"])
        }
        else if (a[sortType] !== b[sortType]) {
          return b[sortType] - a[sortType]
        }
        else {
          return b[secondarySortType] - a[secondarySortType]
        }
      }
    )
  }

  async function getMedalData() {
    let defaultSortType = "gold"
    setError(false);
    try {
      const response = await fetch(medalDataUrl);
      const medalData = await response.json();
      const sortedMedalData = sortMedalData(medalData, defaultSortType);
      setMedalData(sortedMedalData);
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
            {medalTabs.map(
              medalTab =>
                <th key={medalTab + " header"}
                  className={
                    medalTab.toLowerCase() === activeTab
                      ? "active"
                      : "not-active"
                  } >
                </th>
            )}
          </tr>
          <tr>
            {medalTabs.map(
              medalTab =>
                <td key={medalTab + " tab"}
                  onClick={
                    medalTab === ""
                      ? null
                      : handleClick}
                  className={"click-tab"}
                  id={medalTab.toLowerCase()}>
                  {medalTab === "Total"
                    ? medalTab
                    : null
                  }
                </td>
            )}
          </tr>
          <tr>
            <td>
              <CountryMedalCountContainer sortMedalData={sortMedalData} medalData={medalData} setMedalData={setMedalData}/>
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
