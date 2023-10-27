import SportDetailInfo from "../components/SportDetailInfo";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SportDetail = () => {
    let { sport_id } = useParams();

    const [sport_detail, setSportDetail] = useState([{}])


    useEffect(() => {
        axios.get(`http://localhost:8000/paris_org/olympic/${sport_id}`)
            .then(res => {setSportDetail(res.data)})
    });

    

    return (
        <div>
            <SportDetailInfo sport_detail={sport_detail}/>
        </div>
    )
  };
  

export default SportDetail;