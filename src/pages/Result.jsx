// import React from 'react'
// import Dropdown from '../components/dropdown.jsx'
import React, { useState } from 'react';
import '../styles/dropdown.css';
import Card from '../components/card';

const Result = () => {
  const [sportResults, setSportResults] = useState([]);

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
      <div className="dropdown1">
        <h1></h1>
        <Card updateSportResults={updateSportResults} />
        <Card updateSportResults={updateSportResults} />
        <Card updateSportResults={updateSportResults} />
      </div>
      <button onClick={sendDataToBackend}>Save</button>
    </>
  );
};

export default Result;
