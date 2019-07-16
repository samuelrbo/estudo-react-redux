import React, { Component } from 'react';

export default class Contador extends Component {

  // Solução 01 para this ser referenciado a classe e não ao elemento
  // constructor(props) {
  //   super(props);

  //   this.maisUm = this.maisUm.bind(this);
  // }

  // maisUm() {
  //   this.props.numero++;
  // }

  // Criando o metodo com arraw function automaticamente o this é refeciando a classe e não ao elemento
  maisUm = () => {
    this.props.numero++;
  }

  render() {
    return(
      <div>
        <div>Número: {this.props.numero}</div>

        {/* Solução 01 para this ser referenciado a classe e não ao elemento (usando arrow)
        <button onClick={() => this.maisUm()}>Inc</button> */}

        <button onClick={this.maisUm}>Inc</button>
        <button>Dec</button>
      </div>
    );
  }
}
