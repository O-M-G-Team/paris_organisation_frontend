import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/SportDetail.css'
import { format } from 'date-fns';

function SportDetailInfo(props) {
    const result = props.sport_detail.result;


    return (
        <div style={{ padding: 5 }} >
            <Card sx={{ minWidth: 500, b: 50 }}>
                <CardContent>
                    <h1>
                        {props.sport_detail.sport_name}
                    </h1>
                    <h3>
                        Participating Country <br></br>
                    </h3>
                    <p>
                        &emsp;{props.sport_detail.participating_country ? props.sport_detail.participating_country.join(', ') : ''}
                    </p>
                    <h3>
                        Date of the match <br></br>
                    </h3>
                    <p>
                        &emsp;{props.sport_detail.date_time}
                    </p>
                    <h3>
                        Result<br></br>
                    </h3>
                    
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
                </CardContent>
            </Card>
        </div>


    )
}

export default SportDetailInfo;