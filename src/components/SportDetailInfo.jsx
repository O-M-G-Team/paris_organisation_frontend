import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function SportDetailInfo(props) {
    console.log(props.sport_detail.result)
    const result = props.sport_detail.result;

    return (
        <div style={{ padding: 5 }} >
            <Card sx={{ minWidth: 275, b: 10 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 30 }} color="div" gutterBottom>
                        {props.sport_detail.sport_name}
                    </Typography>
                    <Typography variant="h6" >
                        Participating Country <br></br>
                    </Typography>
                    <Typography variant="p" >
                        {props.sport_detail.participating_country ? props.sport_detail.participating_country.join(', ') : ''}
                    </Typography>
                    <Typography variant="h6">
                        Date of the match <br></br>
                    </Typography>
                    <Typography variant="p">
                        {props.sport_detail.date_time}
                    </Typography>

                    <table>
                        <tbody>
                            {result && Object.entries(result).map(([key, value]) => (<tr key={key}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>


    )
}

export default SportDetailInfo;