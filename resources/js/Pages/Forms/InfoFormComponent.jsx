import React, { Component } from 'react'
import axios from 'axios';

class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
  }

  onChangeValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitButton(e) {
    e.preventDefault();

    axios.post('/submitForm', {
      name: this.state.name,
      description: this.state.description
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      name: '',
      description: ''
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <form onSubmit={this.onSubmitButton}>
        <strong>Name:</strong><br />
        <input type="text" name="name" value={this.state.name} onChange={this.onChangeValue} /><br />
        <strong>Description:</strong><br />
        <textarea name="description" value={this.state.description} onChange={this.onChangeValue}></textarea><br />
        <button>Submit</button>
      </form>
    )
  }
}
export default Example;