import { Component } from "react";

export default class NewComponent extends Component {

  state = {
    name: 'Bill',
    age: 65,
    mobile: 5145555555,
    skills: ['react', 'laravel']
  }

  render() {
    return (
      <>
        <div>Class Component</div>

        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Mobile: {this.state.mobile}</p>
        <p>Skills: {this.state.skills.join(', ')}</p>
      </>

    )
  }
}
