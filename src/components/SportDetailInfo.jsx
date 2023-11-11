import React from 'react'
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

    return (
        <div>
            <br></br>
            <h1>
                {props.sport_detail.sport_name}
            </h1>
            <br></br>
            <h2>
                Participating Country <br></br>
            </h2>
            <p>
                &emsp;{props.sport_detail.participating_country ? props.sport_detail.participating_country.join(', ') : 'No country available'}
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
            <div className="detail" style={{ marginLeft: '1rem' }}>
                <table>

                    <thead>
                        <tr>
                            <th>Medal</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result && Object.keys(result).length > 0
                            ? Object.entries(result).map(([key, value]) => (
                                <tr key={value}>
                                    <td>{key}</td>
                                    <td>{value.join(', ')}</td>
                                </tr>
                            ))
                            : <tr>
                                <td colSpan="2"> &emsp; No result available</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default SportDetailInfo;