import React from 'react';
import pokedexLogo from '../../assets/pokedex-logo.png';

import './style.css';

export default function Header() {

  return (
    <div className="header-container">
      <img src={pokedexLogo} alt="Pokedex"></img>
    </div>
  )
}