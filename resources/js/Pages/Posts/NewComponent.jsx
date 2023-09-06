import { Component } from "react";

export default class NewComponent extends Component {

  state = {
    name: 'Bill',
    age: 65,
    mobile: 5145555555,
    skills: ['react', 'laravel']
  }

  handleClick = () => {
    console.log('Button Clicked');
  }

  handleMouseOver = (e) => {
    console.log(e.nativeEvent.clientX, e.nativeEvent.clientY);
  }

  handleCopy = (e) => {
    console.log('p has been copied');
  }

  handleChangeState = () => {
    this.setState({
      name: 'John',
      age: 35,
      mobile: 5143333333,
      skills: ['PHP', 'Java']
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name', this.state.name);
    console.log('Age', this.state.age);
    console.log('Mobile', this.state.mobile);
  }

  render() {
    return (
      <>
        <div>Class Component</div>

        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Mobile: {this.state.mobile}</p>
        <p>Skills: {this.state.skills.join(', ')}</p>
        <hr />
        <button type="button" onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Over me, then Click me and see the log</button>

        <hr />

        <p onCopy={this.handleCopy}>Copy this text and see the console log</p>

        <hr />

        <button type="button" onClick={this.handleChangeState} >Change State</button>

        <hr />

        <form onSubmit={this.handleSubmit}>
          Name : <input type="text" name="name" onChange={this.handleChange} /> <br />
          Age : <input type="text" name="age" onChange={this.handleChange} /> <br />
          Mobile : <input type="text" name="mobile" onChange={this.handleChange} /> <br />
          <button type="submit">Submit</button>
        </form>
      </>

    )
  }
}
