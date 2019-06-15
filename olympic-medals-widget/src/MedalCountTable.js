import React, { useEffect, useState } from 'react';
import './App.css';
import CountryMedalCountContainer from './CountryMedalCountContainer';
import ErrorMessage from './ErrorMessage'

function MedalCountTable() {

  const medalDataUrl = 'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json'
  const [medalData, setMedalData] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("gold");
  const medalTabs = ["country-order", "gold", "silver", "bronze", "total"];

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
        if (sortType === "total" && (a["gold"] + a["silver"] + a["bronze"]) !== (b["gold"] + b["silver"] + b["bronze"]) ) {
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
    let response;
    setError(null);
    try {
      response = await fetch(medalDataUrl);
    } catch(error) {
      console.log(`${error} --- please check your internet connection.`);
      return setError(error);
    }
    const medalData = await response.json();
    const sortedMedalData = sortMedalData(medalData, defaultSortType);
    setMedalData(sortedMedalData);
  }

  return (
    <div className="MedalCountTable">
      <div className="title">MEDAL COUNT</div>
      <div className="activity">
        {medalTabs.map(
          medalTab =>
            <div key={medalTab + " header"}
              className={
                medalTab === activeTab
                  ? "active"
                  : "not-active"
              } >
            </div>
        )}
      </div>
      <div className="click-tabs">
        {medalTabs.map(
          medalTab =>
            <div key={medalTab + " tab"}
              onClick={
                medalTab === "country-order"
                  ? null
                  : handleClick}
              className={"click-tab"}
              id={medalTab}>
              {medalTab === "total"
                ? medalTab.toUpperCase()
                : null
              }
            </div>
        )}
      </div>
      <div className="medal-count">
        <CountryMedalCountContainer medalData={medalData}/>
        <ErrorMessage error={error}/>
      </div>
    </div>
  );
}

export default MedalCountTable;
