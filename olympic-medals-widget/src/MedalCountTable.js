import React, { useEffect, useState } from 'react';
import './App.css';
// import MedalCountType from './MedalCountType';
// import CountryFlagContainer from './CountryFlagContainer';
import CountryMedalCountContainer from './CountryMedalCountContainer';

function MedalCountTable() {

  const medalDataUrl = 'https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json'
  const [medalData, setMedalData] = useState([]);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState("gold")
  const medalTabs = ["Gold", "Silver", "Bronze", "Total"]

  useEffect(
    () => {
      getMedalData();
    }, []
  );

  // useEffect(
  //   (activeTab) => {
  //     sortMedalData(medalData, activeTab);
  //     console.log(medalData, activeTab);
  //     setMedalData(medalData);
  //   }, []
  // );

  function handleClick(event) {
    const clickedTab = event.target.innerText.toLowerCase();
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
            <th></th>
            {medalTabs.map(
              medalTab => <th onClick={handleClick}>{medalTab}</th>
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

// (b.gold > a.gold) ? 1 : (b.gold === a.gold)
//     ? ((b.silver > a.silver)
//       ? 1
//       : -1)
//     : -1)

// switch (sortType) {
//   case "gold":
//     secondarySortType = "silver";
//     break;
//   case "silver":
//     secondarySortType = "gold";
//     break;
//   case "bronze":
//     secondarySortType = "gold"
// }
