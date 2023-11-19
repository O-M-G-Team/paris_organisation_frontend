import React, { useEffect, useState, useMemo } from "react";
import Medal from "../components/Medal";
import "../styles/SportTable.css";
import { getSport } from "../services/data";
import NavBar from "../components/NavBar";
import "../styles/result.css";
import Table from "../components/Table";
import { debounce } from 'lodash';


const generateDateRange = () => {
  const startDate = new Date("2024-07-24");
  const endDate = new Date("2024-08-11");
  const dateRange = [];

  while (startDate <= endDate) {
    dateRange.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }

  return dateRange;
};


const SportTable = () => {
  const [sportData, setSportData] = useState([]);
  console.log(sportData);

  useEffect(() => {
    getSport()
      .then((data) => setSportData(data))
      .catch((err) => console.log(err));
  }, []);

  const olympicDate = useMemo(() => generateDateRange(), []);

  const columns = useMemo(() => [
    {
      Header: "Sport",
      accessor: (props) => ([props.sport_type, props.sport_name]),
      Cell: ({ value }) => {
        const [sport_type, sport_name] = value;
        return (
          <div>
            {sport_type} - {sport_name}
          </div>
        );
      },
      defaultCanSort: true,
      sortType: (rowA, rowB) => {
        const valueA = rowA.original.sport_type + rowA.original.sport_name;
        const valueB = rowB.original.sport_type + rowB.original.sport_name;
        return valueA.localeCompare(valueB);
      },
    },
    ...olympicDate.map((date, index) => ({
      Header: (
        <div key={date} className='date'>
          {date.toLocaleDateString('th-TH', { month: '2-digit', day: '2-digit' }).split('/').map((day) => (
            <div className='day' key={day}>
                {day}
            </div>
          ))}
        </div>
      ),
      accessor: `olympicDates[${index}]`,
      enableGlobalFilter: false,
      Cell: ({row}) => (
        row.original.date_time.split('T')[0] === date.toISOString().split('T')[0] ? (
          <Medal sportID={row.original.sport_id}/>
        ) : (
          ''
        )
      ),
      sortType: (rowA, rowB, columnId) => {
        if (columnId === `olympicDates[${index}]`) {
          const valueA = rowA.original.date_time.split('T')[0] === date.toISOString().split('T')[0] ? 0 : 1;
          const valueB = rowB.original.date_time.split('T')[0] === date.toISOString().split('T')[0] ? 0 : 1;
          return valueA - valueB;
        }
        return rowA.values[columnId].localeCompare(rowB.values[columnId]);
      },
    })),
  ],
  [olympicDate]
  );

  const scrollToTop = debounce( () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, 200);

  return (
    <>
      <NavBar />
      <div className="table-header">
        <h1 className="title">Olympic Schedule</h1>
      </div>
      <div className="sport-table">
        {(!sportData  || sportData.length === 0)  ? (
          <div className="no-table-available-message">
            <h2>Schedule is unavailable at the moment.</h2>
          </div>
        ) : (
          <Table columns={columns} data={sportData} />
        )}
      </div>
      <button className='to-top' onClick={scrollToTop}>↑</button>
    </>
  );
};

export default SportTable;
