import React, { Component } from 'react';

import { Title } from './styles';

class Main extends Component {
  state = {
    persons: [],
    newPerson: '',
  };

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.persons) {
      localStorage.setItem('persons', JSON.stringify(this.state.persons));
    }
  }

  handleInputChange = e => {
    this.setState({ newPerson: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      persons: [...this.state.persons, this.state.newPerson],
      newPerson: '',
    });
  };

  render() {
    return (
      <>
        <Title>Lista de usuários:</Title>
        <ul>
          {this.state.persons.map(person => (
            <li key={person}>{person}</li>
          ))}
        </ul>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newPerson}
          />
          <button type="submit">Salvar</button>
        </form>
      </>
    );
  }
}

export default Main;
