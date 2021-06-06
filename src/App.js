import React, { Component } from 'react'

class HelloWorld extends Component {
  state = {
    name: 'Alan',
    idade: 24,
    comida: 'feijoada',
    musicas: ['correria - BK', 'Caminhos - BK', 'Bloco-7 - BK']
  }

  render() {
    return (
      <div className='title'>
        <h1>{this.state.name}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comida}</h3>
        <ul>
          <li>
            {this.state.musicas[0]}
          </li>
          <li>
            {this.state.musicas[1]}
          </li>
          <li>
            {this.state.musicas[2]}
          </li>
        </ul>
      </div>
    );
  }
}
export default HelloWorld;