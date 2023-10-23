import React, { useEffect, useState } from 'react';
import Medal from '../components/Medal';
import '../styles/Table.css';
import { getSport } from '../services/data';

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
  console.log(sportData);

  useEffect(() => {
    getSport()
      .then((data) => setSportData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className='title'>Olympic Schedule</h1>
      <div className='sport-table'>
        {sportData.length === 0 ? (
          <div className='no-table-available-message'>
            No table is available at the moment.
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
              {sportData.map((sport) => (
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
