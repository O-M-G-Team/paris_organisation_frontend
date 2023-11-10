import SportDetailInfo from '../components/SportDetailInfo';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Result from "./Result";


const SportDetail = () => {
    let { sport_id } = useParams();

    const [sport_detail, setSportDetail] = useState([{}])


    useEffect(() => {
        axios.get(`http://localhost:8000/paris_org/olympic/${sport_id}`)
            .then(res => {setSportDetail(res.data)})
    });

    return (
        <>
        <NavBar />
        <div className='combine-table' style={{display:"flex"}}>
            <SportDetailInfo sport_detail={sport_detail}/>
            <Result/>
        </div>
        </>
    )
};


export default SportDetail;