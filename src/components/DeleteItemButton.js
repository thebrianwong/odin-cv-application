import React from "react";

class DeleteItemButton extends React.Component {
  render() {
    const {
      generalClassName,
      specificClassName,
      itemIndex,
      taskIndex,
      deleteFromCollection,
    } = this.props;
    return (
      <button
        className={`${generalClassName} ${specificClassName}`}
        onClick={() => deleteFromCollection(itemIndex, taskIndex)}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    );
  }
}

export default DeleteItemButton;
