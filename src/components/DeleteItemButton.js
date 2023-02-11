import React from "react";

class DeleteItemButton extends React.Component {
  render() {
    const { itemIndex, taskIndex, deleteFromCollection } = this.props;
    return (
      <button onClick={() => deleteFromCollection(itemIndex, taskIndex)}>
        <span class="material-symbols-outlined">close</span>
      </button>
    );
  }
}

export default DeleteItemButton;
