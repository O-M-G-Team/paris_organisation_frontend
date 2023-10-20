// import React from 'react'
// import Dropdown from '../components/dropdown.jsx'
import { useState } from 'react'
import Medal from '../components/medal.jsx'
import '../styles/dropdown.css'


const Result = () => {
  const [selected, setSelected] = useState("Select Medal");
  return (
    <div className="dropdown1">
        <h1></h1>
        <Medal selected={selected} setSelected={setSelected}/>
    </div>

  )
}

export default Result
 