import React from 'react';

import './styles.css'

export default function Form() {
  return (
    <section className="form">
      <h2>Search for your pokemon</h2>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Color"></input>
        <input type="text" placeholder="Locality"></input>
        <input type="text" placeholder="Species"></input>

        <button>Search</button>
      </form>
    </section>
  )
}