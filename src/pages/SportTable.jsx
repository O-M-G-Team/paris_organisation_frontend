import React, { useEffect, useState } from 'react';
import Medal from '../components/Medal';
import '../styles/SportTable.css';
import { getSport } from '../services/data';
import NavBar from '../components/NavBar';

const generateDateRange = () => {
  const startDate = new Date('2024-07-24');
  const endDate = new Date('2024-08-11');
  const dateRange = [];

  while (startDate <= endDate) {
    dateRange.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return dateRange;
};

const olympicDate = generateDateRange();

const SportTable = () => {
  const [sportData, setSportData] = useState([]);
  const [keyword, setKeyword] = useState("");
  console.log(sportData);

  useEffect(() => {
    getSport()
      .then((data) => setSportData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <div className='table-header'>
        <h1 className='title'>Olympic Schedule</h1>
        <input type='text' placeholder='Search Sport...' className='search'
          onChange={(e) => { setKeyword(e.target.value) }} />
      </div>
      <div className='sport-table'>
        {sportData.length === 0 ? (
          <div className='no-table-available-message'>
            <h2>Schedule is unavailable at the moment.</h2>
          </div>
        ) : (
          <table>
            <thead>
              <tr className='date'>
                <th>Sport</th>
                {olympicDate.map((date) => (
                  <th key={date}>
                    {date.toLocaleDateString('en-UK', { month: 'numeric', day: 'numeric' }).split('/').map((day) => (
                      <div className='day' key={day}>
                        {day}
                      </div>
                    ))}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sportData?.filter((sport) =>
                sport?.sport_name?.toLowerCase().includes(keyword.toLowerCase()))
                .sort((a, b) => a.sport_name.toLowerCase().localeCompare(b.sport_name.toLowerCase()))
                .map((sport) => (
                  <tr key={sport.sport_id}>
                    <td>{sport.sport_name}</td>
                    {olympicDate.map((date) => (
                      <td className='medal' key={sport.sport_id}>
                        {new Date(sport.date_time).toISOString().split('T')[0] === date.toISOString().split('T')[0] ? (
                          <Medal sportID={sport.sport_id} />
                        ) : (
                          ' '
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default SportTable;
