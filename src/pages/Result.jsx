// import React from 'react'
// import Dropdown from '../components/dropdown.jsx'
import React, { useState } from 'react';
import "../styles/header.css";
import Card from '../components/card';
import "../styles/button.css";

const Result = () => {
  const [sportResults, setSportResults] = useState([]);

  const updateSportResults = (sportResult) => {
    setSportResults((prevResults) => [...prevResults, sportResult]);
  };

  const sendData = (url, method, requestData) => {
    console.log(requestData);
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Server responded with status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  }

  const saveData = () => {
    const requestData = {
      sport_id: 'ATH0102',
      result: {
        gold: sportResults
          .filter((result) => result.medal === 'Gold')
          .map((result) => result.country),
        silver: sportResults
          .filter((result) => result.medal === 'Silver')
          .map((result) => result.country),
        bronze: sportResults
          .filter((result) => result.medal === 'Bronze')
          .map((result) => result.country),
      },
    };
    sendData('http://localhost:8000/paris_org/olympic/enter_result', 'PUT', requestData)
      .then(() => sendData('https://nongnop.azurewebsites.net/match_table/' + sport_id, 'POST', requestData));
  }

  return (
    <div className='resulttable'>
      <div className="header">
        <div className='w'>Enter Result</div></div>
      <div className="dropdown1">
        <h1></h1>
        <Card updateSportResults={updateSportResults} />
        <Card updateSportResults={updateSportResults} />
        <Card updateSportResults={updateSportResults} />
      </div>
      <div className='save-btt'>
        <button onClick={saveData}>Save</button>
      </div>

    </div>
  );
};

export default Result;
