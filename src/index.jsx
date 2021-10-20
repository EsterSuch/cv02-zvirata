import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Animal from './components/Animal';

const type = [
  {
    name: 'gibon velky',
    species: 'gibon',
  },
  {
    name: 'lev hrivaty',
    species: 'lev',
  },
  {
    name: 'nosorozec africky',
    species: 'nosorozec',
  },
  {
    name: 'panda cerna',
    species: 'panda',
  },
  {
    name: 'papusek strakaty',
    species: 'papousek',
  },
  {
    name: 'slon africky',
    species: 'slon',
  },
  {
    name: 'surikata stojata',
    species: 'surikata',
  },
  {
    name: 'tygr bengalsky',
    species: 'tygr',
  },
  {
    name: 'velbloud poustni',
    species: 'velbloud',
  },
  {
    name: 'zirafa flekata',
    species: 'zirafa',
  },
];

import '/assets/';
const App = () => (
  <div className="container">
    <Animal name='slon africky' species='slon'/>
    <Animal />
    <Animal />
    <Animal />
  </div>
);

render(<App />, document.querySelector('#app'));
