const Button = ({ name, type, onClick }) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button