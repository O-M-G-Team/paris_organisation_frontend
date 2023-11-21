import "../styles/button.css"
import React from 'react'

const Button = ({ name, type, onClick }) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button