// import React from 'react'
// import Dropdown from '../components/dropdown.jsx'
import React, { useState } from 'react';
import "../styles/header.css";
import Card from '../components/card';
import "../styles/button.css";

const Result = (props) => {
  const [sportResults, setSportResults] = useState([]);
  const detail = props.sport_detail;

  const updateSportResults = (sportResult) => {
    setSportResults((prevResults) => [...prevResults, sportResult]);
  };

  const sendDataToBackend = () => {
    const requestData = {
      sport_id: 'sport_id1',
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
    console.log(requestData);
    fetch('http://localhost:8000/paris_org/olympic/enter_result', {
      method: 'PUT',
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
        console.error('Error sending data to the backend:', error);
      });
  };
  return (
    <>
        <div className='resulttable'>
    <div className="header">
      <div className='w'>Enter Result</div></div>
      <div className="dropdown1">
        <h1></h1>
        <Card updateSportResults={updateSportResults} countries={detail.participating_country} />
        <Card updateSportResults={updateSportResults} countries={detail.participating_country} />
        <Card updateSportResults={updateSportResults} countries={detail.participating_country} />
      </div>
      <div className='save-btt'>
      <button onClick={sendDataToBackend}>Save</button>
      </div>
      </div>
    </>
  );
};

export default Result;
