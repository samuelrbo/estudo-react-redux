import React from 'react';

export const CompA = props =>
  <h1>Primeiro diz: { props.valor }</h1>

export const CompB = props =>
  <h1>Segundo diz: { props.valor }</h1>

export default CompA;

// export default function() {
//   return <p>Teste</p>
// }

// const CompA = props =>
//   <h1>Primeiro diz: { props.valor }</h1>

// const CompB = props =>
//   <h1>Segundo diz: { props.valor }</h1>

// export { CompA, CompB };