// import React from 'react'
// import Dropdown from '../components/dropdown.jsx'
import { useState } from 'react'
import Medal from '../components/medal.jsx'
import Country from '..//components/dropdown.jsx'
import '../styles/dropdown.css'


const Result = () => {
  const [selected, setSelected] = useState("Select Medal");
  const [selected2, setSelecte2] = useState("Select country");
  return (
    <div className="dropdown1">
        <h1></h1>
        <Medal selected={selected} setSelected={setSelected}/>
        <Country selected={selected2} setSelected={setSelecte2}/>
    </div>

  )
}

export default Result
 