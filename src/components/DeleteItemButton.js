import React from "react";

class DeleteItemButton extends React.Component {
  render() {
    const { itemIndex, taskIndex, deleteItem } = this.props;
    return (
      <button onClick={() => deleteItem(itemIndex, taskIndex)}>Delete</button>
    );
  }
}

export default DeleteItemButton;
