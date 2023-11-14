import '../styles/card.css';
import DropdownMedal from './DropdownMedal';
import Country from './DropdownCountry';
import React, { useState, useEffect } from 'react';

const Card = ({updateSportResults, countries}) => {
  const [selectedMedal, setSelectedMedal] = useState('Select Medal');
  const [selectedCountry, setSelectedCountry] = useState('Select Country');

  useEffect(() => {
    if (selectedMedal !== 'Select Medal' && selectedCountry !== 'Select Country') {
      updateSportResults({ medal: selectedMedal, country: selectedCountry });
    }
  }, [selectedMedal, selectedCountry]);

  return (
    <div className="card">
      <DropdownMedal selected={selectedMedal} setSelected={setSelectedMedal} />
      <Country selected={selectedCountry} setSelected={setSelectedCountry} countries={countries} />
    </div>
  );
};

export default Card;


