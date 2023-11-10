import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

function  DropdownCountry ({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Algeria", "Argentina", "Thailand"];
  return(
    <div className= "dropdown">
      <div className="dropdown-btn" onClick={(e) => 
        setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret down"></span>
        <IoIosArrowDropdown/>
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
            {option}
                    </div>
                  ))}
              </div>
      )}
    </div>
  );
}
export default DropdownCountry;
