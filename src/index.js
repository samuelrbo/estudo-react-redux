import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './components/PrimeiroComponente';

const elemento = document.getElementById('root');

ReactDOM.render(
  <div>
    <PrimeiroComponente valor="Bom dia!" aBcD={ 2**8 } eFgH={ Math.pow(2, 8) } />
  </div>  
, elemento);
