import React from "react";

class AddItemButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { buttonLabel, addItem } = this.props;
    return <button onClick={addItem}>{buttonLabel}</button>;
  }
}

export default AddItemButton;
