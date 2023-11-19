// import React from 'react'
// import Dropdown from '../components/dropdown.jsx'
import React, { useState } from "react";
import "../styles/header.css";
import Card from "../components/card";
import "../styles/button.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Result = (props) => {
  const [sportResults, setSportResults] = useState([
    { medal: "Select Medal", country: "Select Country" },
    { medal: "Select Medal", country: "Select Country" },
    { medal: "Select Medal", country: "Select Country" },
  ]);
  const detail = props.sport_detail;
  const [open, setOpen] = useState(false);

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
      { medal: "Select Medal", country: "Select Country" },
    ]);
  };

  const hasDuplicateCountries = () => {
    const countrySet = new Set();
    for (const result of sportResults) {
      if (result.country !== "Select Country") {
        if (countrySet.has(result.country)) {
          return true; // Duplicate found
        }
        countrySet.add(result.country);
      }
    }
    return false; // No duplicates found
  };

  // function hasAllMedals(array) {
  //   let hasGold = false;
  //   let hasSilver = false;
  //   let hasBronze = false;

  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].medal === 'Gold') {
  //       hasGold = true;
  //     } else if (array[i].medal === 'Silver') {
  //       hasSilver = true;
  //     } else if (array[i].medal === 'Bronze') {
  //       hasBronze = true;
  //     }
  //   }

  //   return hasGold && hasSilver && hasBronze;
  // }
  // else if (!hasAllMedals(sportResults)){
  //   alert('Result should contain all three medals (Gold, Silver, and Bronze).');
  //   sportResults.splice(0, sportResults.length);
  //   setSportResults([...sportResults]);
  //   window.location.reload();
  // }

  function hasMedalAndCountry(array) {
    for (let i = 0; i < sportResults.length; i++) {
      if ( array[i].medal === "Select Medal" && array[i].country === "Select Country"
      ) {
        return true;
      } 
    }
  }

  const sendDataToBackend = () => {
    console.log(sportResults);
    if (hasMedalAndCountry(sportResults)) {
      console.log(sportResults)
      alert("Please enter all sport results.");
      sportResults.splice(0, sportResults.length);
      setSportResults([...sportResults]);
      window.location.reload();
    } else if (hasDuplicateCountries()) {
      alert(
        "Duplicate countries found. Please enter unique countries for each result."
      );
      console.log('X')
      sportResults.splice(0, sportResults.length);
      setSportResults([...sportResults]);
      window.location.reload();
    } else {
      const requestData = {
        sport_id: detail.sport_id,
        result: {
          gold: sportResults
            .filter((result) => result.medal === "Gold")
            .map((result) => result.country),
          silver: sportResults
            .filter((result) => result.medal === "Silver")
            .map((result) => result.country),
          bronze: sportResults
            .filter((result) => result.medal === "Bronze")
            .map((result) => result.country),
        },
      };
      console.log(requestData);
      fetch("http://localhost:8000/paris_org/olympic/enter_result", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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
          console.error("Error sending data to the backend:", error);
        });
    alert("Result is already saved!");
    window.location.reload();
    }  
  };
  return (
    <>
      <div className="btt-con">
        <div className="add-btt">
          <button onClick={addCard}>Add</button>
        </div>
        <div className="save-btt">
          <button onClick={sendDataToBackend}>Save</button>
        </div>
        <div className="delete-btt">
          {sportResults.map(
            (result, index) =>
              index > 2 && (
                <button key={index} onClick={() => deleteCard(index)}>
                  Delete
                </button>
              )
          )}
        </div>
      </div>

      <div className="resulttable">
        {/* <div className="header">
          <div className='w'>Enter Result</div>
        </div> */}
        <div className="dropdown1">
          {sportResults.map((result, index) => (
            <Card
              key={index}
              updateSportResults={(newResult) =>
                updateSportResults(index, newResult)
              }
              countries={detail.participating_country}
              onDelete={() => deleteCard(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Result;
