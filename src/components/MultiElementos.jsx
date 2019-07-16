import React from 'react';

// Exemplos para multi elementos adjacentes (elementos subsequentes)
// OBS.: com o container <div> não necessáriamente é preciso ser subsequente

// Array de elementos, não precisa do Fragment nem do container para os elementos
export default props => [
  <h1>Parte 1</h1>,
  <h2>Parte 2</h2>
]

//  // Não adiciona elemento extra, apenas os elementos dentro do Fragment
// export default props => 
//   <React.Fragment>
//     <h1>Parte 1</h1>
//     <h2>Parte 2</h2>
//   </React.Fragment>

// // Solução 01: Mais utilizada
// export default props => 
//   <div>
//     <h1>Parte 1</h1>
//     <h2>Parte 2</h2>
//   </div>
