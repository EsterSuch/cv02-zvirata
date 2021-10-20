import React from 'react';
import './style.css';


const Animal = ({ name, species }) => (

  <div className="animal">
    <p>{name}</p>
    <img src={species} alt={species} />

  </div>

);

export default Animal;