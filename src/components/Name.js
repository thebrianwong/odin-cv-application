import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", editing: false };
  }
  render() {
    return (
      <>
        {!this.state.editing &&
          (this.state.name.length === 0 ? (
            <p>Name</p>
          ) : (
            <p>{this.state.name}</p>
          ))}
        {this.state.editing && <input type={"text"}></input>}
      </>
    );
  }
}

export default Name;
