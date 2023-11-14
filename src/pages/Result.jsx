// import React from 'react'
// import Dropdown from '../components/dropdown.jsx'
import React, { useState } from 'react';
import "../styles/header.css";
import Card from '../components/card';
import "../styles/button.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicModal from '../components/BasicModal';

const Result = (props) => {
  const [sportResults, setSportResults] = useState([]);
  const detail = props.sport_detail;
  const [open,setOpen] = useState(false)
  const [text,setText] = useState('')
  const [selectedMedal, setSelectedMedal] = useState('Select Medal');
  const [selectedCountry, setSelectedCountry] = useState('Select Country');

  const updateSportResults = (sportResult) => {
    setSportResults((prevResults) => [...prevResults, sportResult]);
  };

  const hasDuplicateCountries = () => {
    const countrySet = new Set();
    for (const result of sportResults) {
      if (result.country !== 'Select Country') {
        if (countrySet.has(result.country)) {
          return true; // Duplicate found
        }
        countrySet.add(result.country);
      }
    }
    return false; // No duplicates found
  };

  const sendDataToBackend = () => {
    // const hasMissingInputs = sportResults.some(result => result.medal === 'Select Medal' || result.country === 'Select Country');

    // console.log(sportResults)
    // console.log(c)
    console.log(sportResults)
    if (sportResults == 0) {
      setOpen(true);
      setText('Data is empty.Plase enter sport result')
    } 
    else if(sportResults.length == 1){
      setOpen(true);
      setText('Plase enter all sport result')
      sportResults.splice(0, 1);
      setSportResults([...sportResults]);

    }
    else if(sportResults.length == 2){
      setOpen(true);
      setText('Plase enter all sport result')
      sportResults.splice(0, sportResults.length);
      setSportResults([...sportResults]);
    }
    else if (hasDuplicateCountries()) {
      setOpen(true);
      setText('Duplicate countries found. Please enter unique countries for each result.');
      sportResults.splice(0, sportResults.length);
      setSportResults([...sportResults]);
      setSelectedMedal('Select Medal');
      setSelectedCountry('Select Country');
    }
    else {
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
  }};
  console.log(sportResults.length)
  return (
    <>
        <div className='resulttable'>
    <div className="header">
      <div className='w'>Enter Result</div></div>
      <div className="dropdown1">
        <h1></h1>
        <Card
            updateSportResults={updateSportResults}
            countries={detail.participating_country}
            cardIndex={0}
          />
          <Card
            updateSportResults={updateSportResults}
            countries={detail.participating_country}
            cardIndex={1}
          />
          <Card
            updateSportResults={updateSportResults}
            countries={detail.participating_country}
            cardIndex={2}
          />
      </div>
      <div className='save-btt'>
      <button onClick={sendDataToBackend}>Save</button>
      </div>
      </div>
              <BasicModal open={open} onClose={() => setOpen(false)} text={text}/>
    </>
  );
};

export default Result;
