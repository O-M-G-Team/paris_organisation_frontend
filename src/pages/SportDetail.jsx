import SportDetailInfo from '../components/SportDetailInfo';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Result from "./Result";
import '../styles/SportDetail.css'



const SportDetail = () => {
    let { sport_id } = useParams();

    const [sport_detail, setSportDetail] = useState([{}])
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/paris_org/olympic/${sport_id}`)
            .then(res => {setSportDetail(res.data)})
            .catch(error => {console.log(1);navigate(`/sport_detail/error_page/${sport_id}`);})
    }, [sport_id, navigate]);
    

    return (
        <>
        <NavBar />

        <div className='combine-table' style={{display:"flex"}}>
            <div className='info_part'> <SportDetailInfo sport_detail={sport_detail}/> </div>
            <div className='result_part'> <Result/> </div>
        </div>
        </>
    )
};


export default SportDetail;