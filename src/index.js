import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './components/PrimeiroComponente';
// import A, { CompB as B } from './components/DoisComponents';
// import { CompA, CompB as B } from './components/DoisComponents';
// import MultiElementos from './components/MultiElementos';
// import FamiliaSilva from './components/FamiliaSilva';
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import ComponenteComFuncao from './components/ComponenteComFuncao';
// import Pai from './components/Pai';
// import ComponenteClasse from './components/ComponenteClasse';
import Contador from './components/Contador';

const elemento = document.getElementById('root');

ReactDOM.render(
  <div>
    <Contador numero={0} />

    {/* <ComponenteClasse valor="Sou um componente de classe" /> */}

    {/* <Pai /> */}

    {/* <ComponenteComFuncao />  */}

    {/* <Familia sobrenome="Pereira">
      <Membro nome="Andre" />
      <Membro nome="Mariana" />
    </Familia> */}

    {/* <FamiliaSilva /> */}

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
