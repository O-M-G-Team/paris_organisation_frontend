import '../styles/card.css'
import { useState } from 'react';
import Medal from '../components/Medal';
import Country from '../components/Dropdown';
import Button from './Button';

const Card = () => {
  const [entries, setEntries] = useState([
    { medal: 'Select Medal', country: 'Select Country' },
    { medal: 'Select Medal', country: 'Select Country' },
    { medal: 'Select Medal', country: 'Select Country' }
  ]);

  const addEntry = () => {
    setEntries([...entries, { medal: 'Select Medal', country: 'Select Country' }]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  const handleEntryChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = value;
    setEntries(updatedEntries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(entries);
  };

  return (
    <>
            <Button name="Add" onClick={addEntry} />
      <form className="place-form" onSubmit={handleSubmit}>
        {entries.map((entry, index) => (
          <div className="card" key={index}>
            <Medal
              selected={entry.medal}
              setSelected={(value) => handleEntryChange(index, 'medal', value)}
            />
            <Country
              selected={entry.country}
              setSelected={(value) => handleEntryChange(index, 'country', value)}
            />
            {index >= 3 && ( // Only show delete button for dynamically added cards
              <Button name="Delete" onClick={() => deleteEntry(index)} />
            )}
          </div>
        ))}
        <Button name="Submit" type="submit" />
      </form>
    </>
  );
};

export default Card;
