import { useState } from "react";
import '../styles/medal.css'
import { LuMedal } from "react-icons/lu";
import { IoIosArrowDropdown } from "react-icons/io";


function Dropdown({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Gold','Sliver','Bronze']
  return(
    <div className= "dropdown">
      <div className="dropdown-btn" onClick={(e) => 
        setIsActive(!isActive)} >
        {selected}
        <span className="fas fa-caret down"></span> <IoIosArrowDropdown/>
      </div>
      {isActive && (
                <div className="dropdown-content">
                  {options.map((option) => (
                    <div 
                    onClick={(e) => {
                      setSelected(option)
                      setIsActive(false)}
                    }
                    className="dropdown-item"
                    >
                      <LuMedal />  {option}
                    </div>
                  ))}
              </div>
      )}
    </div>
  );
}
export default Dropdown;
