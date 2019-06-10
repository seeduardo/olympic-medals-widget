import React from 'react';
import './App.css';
import MedalCountType from './MedalCountType';
import CountryFlagContainer from './CountryFlagContainer';
import CountryMedalCountContainer from './CountryMedalCountContainer';

function MedalCountTable() {
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
              <CountryMedalCountContainer/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MedalCountTable;
