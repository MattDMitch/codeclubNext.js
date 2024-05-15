import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomResponse: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('https://randoresponse.matthew-4b1.workers.dev/');
      if (response.ok) {
        const data = await response.text();
        this.setState({ randomResponse: data });
      } else {
        console.error('Failed to fetch random response:', response.status);
      }
    } catch (error) {
      console.error('Error fetching random response:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Random Response:</h1>
        <p>{this.state.randomResponse}</p>
      </div>
    );
  }
}

export default HomePage;
