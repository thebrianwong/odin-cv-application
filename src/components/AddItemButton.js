import React from "react";

class AddItemButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { addItem } = this.props;
    return <button onClick={addItem}>+</button>;
  }
}

export default AddItemButton;
