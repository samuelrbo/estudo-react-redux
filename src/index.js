import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './components/PrimeiroComponente';
// import A, { CompB as B } from './components/DoisComponents';
// import { CompA, CompB as B } from './components/DoisComponents';
// import MultiElementos from './components/MultiElementos';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Membro from './components/Membro';

const elemento = document.getElementById('root');

ReactDOM.render(
  <div>
    <Familia sobrenome="">
      <Membro nome="" />
    </Familia>
    <FamiliaSilva />

    {/* <Familia>
      <Membro nome="Andre" sobrenome="Pereira" />
      <Membro nome="Mariana" sobrenome="Pereira" />
    </Familia>
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Gustavo" sobrenome="Arruda" />
    </Familia> */}

    {/* <FamiliaSilva /> */}

    {/* <A valor="Olá eu sou A!" />
    <B valor="B na área!" /> */}

    {/* <MultiElementos /> */}

    {/* <CompA valor="Olá eu sou A!" />
    <B valor="B na área!" /> */}

    {/* <PrimeiroComponente valor="Bom dia!" aBcD={ 2**8 } eFgH={ Math.pow(2, 8) } /> */}
  </div>  
, elemento);
