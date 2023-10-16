import React from 'react'
import medalImg from '../assets/medal.png'
import { Link } from 'react-router-dom'
import '../styles/medal.css'


const Medal = ({ sportID }) => {
    const routeName = `/${sportID}`

    return (
        <Link to={routeName} className='medal'>
            <div className='medal-image'>
                <img src={medalImg}/>
            </div>
        </Link>
    )
}
    
export default Medal
