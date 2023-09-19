import React, { Component } from 'react';
import './customers.css';

class Salesman extends Component {
  constructor() {
    super();
    this.state = {
      salesman: []
    };
  }

  componentDidMount() {
    fetch('/api/salesman')
      .then(res => res.json())
      .then(salesman => this.setState({salesman}, () => console.log('salesman fetched...', salesman)));
  }

  render() {
    return (
      <div>
        <h2>salesman</h2>
        <ul>
        {this.state.salesman.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Salesman;
