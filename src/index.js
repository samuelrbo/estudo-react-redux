import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './components/PrimeiroComponente';
import { CompA, CompB as B } from './components/DoisComponents';

const elemento = document.getElementById('root');

ReactDOM.render(
  <div>
    <CompA valor="Olá eu sou A!" />
    <B valor="B na área!" />
    {/* <PrimeiroComponente valor="Bom dia!" aBcD={ 2**8 } eFgH={ Math.pow(2, 8) } /> */}
  </div>  
, elemento);
