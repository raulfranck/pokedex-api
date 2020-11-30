import React from 'react';

import './styles.css'


export default function Card(pokemon) {
  const id = pokemon.pokemon.id
  const img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

  return (
    <section className="card-container">
      <div className="div-img">
        <img src={img} alt="Pokemon"></img>
      </div>

      <h1>{pokemon.pokemon.name}</h1>
      <h2>tests</h2>

      <div className="status">
        <p><strong>HP:</strong></p>
        <span />
        <p><strong>Atack:</strong></p>
        <span />
        <p><strong>Def:</strong></p>
      </div>
    </section >
  )
}


/* .then(response => {
  return response.forEach((res) => {
    setPokemons(res)
  })
}) */
