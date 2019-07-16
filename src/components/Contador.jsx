import React, { Component } from 'react';

export default class Contador extends Component {

  state = {
    numero: this.props.numeroInicial
  };

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
    this.setState({ numero: this.state.numero + 1 });
  }

  menosUm =  () => {
    this.setState({ numero: this.state.numero - 1 });
  }

  alterarNumero = diferenca => {
    this.setState({ numero: this.state.numero + diferenca });
  }

  render() {
    return(
      <div>
        <div>Número: {this.state.numero}</div>

        {/* Solução 01 para this ser referenciado a classe e não ao elemento (usando arrow)
        <button onClick={() => this.maisUm()}>Inc</button> */}

        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>

        <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
      </div>
    );
  }
}
