import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", editing: false };
  }
  render() {
    return <>{!this.state.editing && <p>{this.state.name}</p>}</>;
  }
}

export default Name;
