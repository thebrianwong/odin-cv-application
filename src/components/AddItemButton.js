import React from "react";

class AddItemButton extends React.Component {
  render() {
    const { generalClassName, specificClassName, addItem } = this.props;
    return (
      <button
        className={`${generalClassName} ${specificClassName}`}
        onClick={addItem}
      >
        <span className="material-symbols-outlined">add</span>
      </button>
    );
  }
}

export default AddItemButton;
