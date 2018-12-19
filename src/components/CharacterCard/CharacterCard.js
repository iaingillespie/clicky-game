import React from 'react';
import './CharacterCard.css'



const CharacterCard = (props) => {
    return (<div onClick={() => props.handleClick(props.id)} className="card">
        
        <img src={props.img} alt={props.name}  height="200px" width="auto"></img>
        
    </div>)
}

export default CharacterCard;