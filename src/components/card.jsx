import '../styles/card.css';
import Medal from '../components/medal';
import Country from '../components/dropdown';
import React, { useState, useEffect } from 'react';

const Card = ({ updateSportResults }) => {
  const [selectedMedal, setSelectedMedal] = useState('Select Medal');
  const [selectedCountry, setSelectedCountry] = useState('Select Country');

  useEffect(() => {
    if (selectedMedal !== 'Select Medal' && selectedCountry !== 'Select Country') {
      updateSportResults({ medal: selectedMedal, country: selectedCountry });
    }
  }, [selectedMedal, selectedCountry]);

  return (
    <div className="card">
      <Medal selected={selectedMedal} setSelected={setSelectedMedal} />
      <Country selected={selectedCountry} setSelected={setSelectedCountry} />
    </div>
  );
};

export default Card;


