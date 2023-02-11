import React from "react";

class AddItemButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { addItem } = this.props;
    return (
      <button onClick={addItem}>
        <span class="material-symbols-outlined">add</span>
      </button>
    );
  }
}

export default AddItemButton;
