import '../styles/card.css'
import { useState } from 'react'
import Medal from '../components/medal.jsx'
import Country from '..//components/dropdown.jsx'

const Card = () => {
    const [selected, setSelected] = useState("Select Medal");
    const [selected2, setSelecte2] = useState("Select country");
  return (
    <div className='card'>
        <Medal selected={selected} setSelected={setSelected}/>
        <Country selected={selected2} setSelected={setSelecte2}/>
     </div>
  )
}

export default Card