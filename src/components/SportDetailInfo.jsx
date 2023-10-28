import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../styles/SportDetail.css'

function SportDetailInfo(props) {
    const result = props.sport_detail.result;
    const date = props.sport_detail.date_time;

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };

    const formattedDate = new Date(date).toLocaleString(undefined, options);

    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'row',
          height: '100vh',
        }
      };


    return (
        <div style={styles.container} >
            <Card sx={{ width: '40%' }}>
                <CardContent>
                    <h1>
                        {props.sport_detail.sport_name}
                    </h1>
                    <h2>
                        Participating Country <br></br>
                    </h2>
                    <p>
                        &emsp;{props.sport_detail.participating_country ? props.sport_detail.participating_country.join(', ') : ''}
                    </p>
                    <br></br>
                    <h2>
                        Date of the match <br></br>
                    </h2>
                    <p>
                        &emsp;{formattedDate}
                    </p>
                    <br></br>
                    <h2>
                        Result<br></br>
                    </h2>
                    <div style={{marginLeft:'1rem'}}>
                        <table>
                            
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Medal</th>
                                </tr>
                            </thead>
                            <tbody>
                            {result && Object.keys(result).length > 0
                                ? Object.entries(result).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))
                                : <tr>
                                    <td colSpan="2"> &emsp; No result available</td>
                                </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>


    )
}

export default SportDetailInfo;