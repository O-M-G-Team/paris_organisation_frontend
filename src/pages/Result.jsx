import React, { useState } from "react";
import "../styles/Header.css";
import Card from "../components/Card";
import "../styles/Button.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";

const Result = (props) => {
  const [sportResults, setSportResults] = useState([
    { medal: "Select Medal", country: "Select Country" },
    { medal: "Select Medal", country: "Select Country" },
    { medal: "Select Medal", country: "Select Country" },
  ]);
  const detail = props.sport_detail;
  const [open, setOpen] = useState(false);
  const unduplicatesport = [
    "boxing",
    "badminton",
    "tennis",
    "archery",
    "taekwondo",
  ];
  const url = `https://nongnop.azurewebsites.net/match_table/id/${detail.sport_id}`;
  const database = import.meta.env.VITE_API_RESULT;
  const method = "POST";
  const methodDB = "PUT";

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

  function hasAllMedals(array) {
    let hasGold = false;
    let hasSilver = false;
    let hasBronze = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i].medal === "Gold") {
        hasGold = true;
      } else if (array[i].medal === "Silver") {
        hasSilver = true;
      } else if (array[i].medal === "Bronze") {
        hasBronze = true;
      }
    }

    return hasGold && hasSilver && hasBronze;
  }

  function hasMedalAndCountry(array) {
    for (let i = 0; i < sportResults.length; i++) {
      if (
        array[i].medal === "Select Medal" &&
        array[i].country === "Select Country"
      ) {
        return true;
      }
    }
  }

  function isSportTypeInList(sport_type) {
    // Check if sport_type is defined before calling toLowerCase
    return sport_type && unduplicatesport.includes(sport_type.toLowerCase());
  }

  function MedalCondition(medalArray) {
    const goldCount = medalArray.filter((entry) => entry.medal === 'Gold').length;
    const silverCount = medalArray.filter((entry) => entry.medal === 'Silver').length;
    const bronzeCount = medalArray.filter((entry) => entry.medal === 'Bronze').length;
  
    if (goldCount === 2 && silverCount >= 1) {
      // Swal.fire({
      //   icon: "warning",
      //   title: "Cann't enter silver medal because your enter more than 1 gold.",
      //   confirmButtonColor: "#ffc038",
      // });
      return '1'
    } else if (goldCount >= 3 && (silverCount > 0 || bronzeCount > 0)) {
      // Swal.fire({
      //   icon: "warning",
      //   title: "Cann't enter other medal because your enter more than 2 gold.",
      //   confirmButtonColor: "#ffc038",
      // });
      return '2'
    } 
    else if (goldCount  ===1 && silverCount ===0 && bronzeCount >= 1){
      return '3'
    }
    else if (goldCount  ===1 && silverCount >1 && bronzeCount >= 1){
      return '4'
  }
  else if (goldCount  ===0 && (silverCount >=1 || bronzeCount >= 1)){
    return '5'
  }
}

  const sendData = (url, method, requestData, destination) => {
    fetch(url, {
      method: method,
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
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Result is already saved!",
          color: "#2e9900",
          showConfirmButton: false,
          timer: 1900,
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        console.error(`Error sending data to the ${destination}:`, error);
      });
  };

  const sendDataToBackend = () => {
    if (MedalCondition(sportResults) === '1' && !isSportTypeInList(detail.sport_type) ) {
            Swal.fire({
        icon: "warning",
        title: "Cannot enter silver medal because you enter more than 1 gold medal.",
        confirmButtonColor: "#ffc038",
      });
    }
    else if (MedalCondition(sportResults) === '2'&& !isSportTypeInList(detail.sport_type))  {
        Swal.fire({
        icon: "warning",
        title: "Cannot enter other medal because you enter more than 2 gold medals.",
        confirmButtonColor: "#ffc038",
      });
    }
    else if (MedalCondition(sportResults) === '3' && !isSportTypeInList(detail.sport_type) ) {
      Swal.fire({
      icon: "warning",
      title: "Cannot enter because no silver medal provided.",
      confirmButtonColor: "#ffc038",
    });
  }
  else if (MedalCondition(sportResults) === '4' && !isSportTypeInList(detail.sport_type) ) {
    Swal.fire({
    icon: "warning",
    title: "Cannot enter bronze medal because you enter more than 2 silver medals.",
    confirmButtonColor: "#ffc038",
  });
}
else if (MedalCondition(sportResults) === '5' && !isSportTypeInList(detail.sport_type) ) {
  Swal.fire({
  icon: "warning",
  title: "Please enter gold medal result.",
  confirmButtonColor: "#ffc038",
});
}

    
    else if (hasMedalAndCountry(sportResults)) {
      Swal.fire({
        icon: "warning",
        title: "Please enter all sport results.",
        confirmButtonColor: "#ffc038",
      });
    } else if (
      isSportTypeInList(detail.sport_type) &&
      !hasAllMedals(sportResults)
    ) {
      Swal.fire({
        icon: "warning",
        title: "This sport can't have \n duplicate medals.",
        text: "The Result should contain all three medal (Gold, Silver, and Bronze).",
        confirmButtonColor: "#ffc038",
      });
    } else if (hasDuplicateCountries()) {
      Swal.fire({
        icon: "warning",
        title: "Duplicate countries found",
        text: "Are you sure you want to enter duplicate countries?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          const sport_id = { sport_id: detail.sport_id };
          const requestData = {
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
          const dataWithSportID = {
            ...sport_id,
            ...requestData,
          };
          console.log(dataWithSportID);
          console.log(requestData);
          sendData(database, methodDB, dataWithSportID, "backend");
          sendData(url, method, requestData, "IOC");
        }
      });
    } else {
      const sport_id = { sport_id: detail.sport_id };
      const requestData = {
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
      const dataWithSportID = {
        ...sport_id,
        ...requestData,
      };
      console.log(dataWithSportID);
      console.log(requestData);
      sendData(database, methodDB, dataWithSportID, "backend");
      sendData(url, method, requestData, "IOC");
    }
  };

  return (
    <>
      <div className="result">
        {props.sport_detail && props.sport_detail.sport_type && (
          <div className="btt-con">
            <div className="save-btt">
              <button onClick={sendDataToBackend}>Save</button>
            </div>
            <div className="add-btt">
              {!isSportTypeInList(detail.sport_type) && (
                <button onClick={addCard}>Add</button>
              )}
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
        )}

        <div className="resulttable">
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
      </div>
    </>
  );
};

export default Result;
