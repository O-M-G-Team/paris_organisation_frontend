import React, { useEffect, useState } from 'react'
import Medal from '../components/Medal'
import '../styles/Table.css'
import { getSport } from '../services/data'

const SportTable = () => {
    const [sport, setSport] = useState([]);

    useEffect(()=>{
        getSport().then(data=>setSport(data))
    },[]);

    return (
        <>
        <h1 className='title'>Olympic Schedule</h1>
        <div className='sport-table'>
            <table>
                <thead>
                    <tr className='date'>

                        {/* sample */}
                        <th>Sport</th>
                        <th>date1</th>
                        <th>date2</th>
                        <th>date3</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {/* sample */}
                    <tr>
                        <td>sport name 1</td>
                        <td className='medal'>
                            <Medal/>
                        </td>
                        <td></td><td></td>
                    </tr>
                    <tr>
                        <td>sport name 2</td>
                        <td></td>
                        <td className='medal'>
                            <Medal/>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>sport name 3</td>
                        <td></td>
                        <td className='medal'>
                            <Medal/>
                        </td>
                        <td></td>
                    </tr>

                </tbody> 
                </table>

        </div>
        </>
    )
}


export default SportTable