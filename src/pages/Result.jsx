// import React from 'react'
// import Dropdown from '../components/dropdown.jsx'
import React, { useState } from 'react';
import "../styles/header.css";
import Card from '../components/card';
import "../styles/button.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Result = (props) => {
  const [sportResults, setSportResults] = useState([
    { medal: 'Select Medal', country: 'Select Country' },
    { medal: 'Select Medal', country: 'Select Country' },
    { medal: 'Select Medal', country: 'Select Country' },
  ]);
  const detail = props.sport_detail;
  const [open,setOpen] = useState(false)


  const updateSportResults = (index, sportResult) => {
    setSportResults((prevResults) => {
      const updatedResults = [...prevResults];
      updatedResults[index] = sportResult;
      return updatedResults;
    });
  };
  
  const deleteCard = (index) => {
    const updatedResults = [...sportResults];
    updatedResults.splice(index, 1);
    setSportResults(updatedResults);
  };

  const addCard = () => {
    // Add a new card with default values
    setSportResults((prevResults) => [
      ...prevResults,
      { medal: 'Select Medal', country: 'Select Country' },
    ]);
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
      alert('Data is missing. Plase enter all sport result.')
      window.location.reload();
    } 
    else if(sportResults.length == 1){
      alert('Plase enter all sport result.');
      sportResults.splice(0, 1);
      setSportResults([...sportResults]);
      window.location.reload();
    }
    else if(sportResults.length == 2){
      alert('Plase enter all sport result.');
      sportResults.splice(0, sportResults.length);
      setSportResults([...sportResults]);
      window.location.reload();
    }
    else if (hasDuplicateCountries()) {
      alert("Duplicate countries found. Please enter unique countries for each result.");
      sportResults.splice(0, sportResults.length);
      setSportResults([...sportResults]);
      window.location.reload();

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
  return (
    <>
      <div className='resulttable'>
        <div className="header">
          <div className='w'>Enter Result</div>
        </div>
        <div className="dropdown1">
          {sportResults.map((result, index) => (
            <Card
              key={index}
              updateSportResults={(newResult) => updateSportResults(index, newResult)}
              countries={detail.participating_country}
              onDelete={() => deleteCard(index)}
            />
          ))}
      <div className="delete-btt">
  {sportResults.map((result, index) => (
    index > 2 && <button key={index} onClick={() => deleteCard(index)}>Delete</button>
  ))}
</div>
        </div>
        <div className='add-btt'>
        <button onClick={addCard}>Add</button>
        </div>
        <div className='save-btt'>
          <button onClick={sendDataToBackend}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Result;
