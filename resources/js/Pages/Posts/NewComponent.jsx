import { Component } from "react";

export default class NewComponent extends Component {

  state = {
    name: 'Bill',
    age: 65,
    mobile: 5145555555,
    skills: ['react', 'laravel']
  }

  handleClick = (e) => {
    console.log('Button Clicked');
  }

  handleMouseOver = (e) => {
    console.log(e.nativeEvent.clientX, e.nativeEvent.clientY);
  }
  
  handleCopy = (e) => {
    console.log('p has been copied');
  }

  render() {
    return (
      <>
        <div>Class Component</div>

        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Mobile: {this.state.mobile}</p>
        <p>Skills: {this.state.skills.join(', ')}</p>
        <hr></hr>
        <button
          type="button"
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
        >Click me</button>

        <p onCopy={this.handleCopy}>Copy test</p>
      </>

    )
  }
}
