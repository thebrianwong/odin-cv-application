import React from "react";

class AddItemButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { addItem } = this.props;
    return <button onClick={addItem}>Add new entry</button>;
  }
}

export default AddItemButton;
