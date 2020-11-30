import React from 'react';

import HandleFilter from './components/HandleFIlter';
import Pokelist from '../src/components/Pokelist';

import './global.css'


function App() {

  return (
    <section className="container">
      <HandleFilter />
      <Pokelist />
    </section>
  );
}

export default App;
