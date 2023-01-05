import React from "react"

const Card = (props) => {
    return(
        <button className="card" onClick={props.handleClick}>
            <div>{props.name}</div>
        </button>
        
    )
}

export default Card;