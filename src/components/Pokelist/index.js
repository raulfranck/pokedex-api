import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import Card from '../Card';

export default function Pokelist() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState([])


  axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(response => setPokemons(response))

  console.log(pokemons)
  return (
    <section className="pokelist-container">

      <input
        type="text"
        value={setSearch()}
        onChange={(ev) => setSearch(ev.target.value)}
      />

      {pokemons.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.id} />

      ))}
    </section>
  )
}