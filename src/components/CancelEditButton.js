import React from "react";

class CancelEditButton extends React.Component {
  render() {
    const { generalClassName, specificClassName, cancelEdit } = this.props;
    return (
      <button
        className={`${generalClassName} ${specificClassName}`}
        onClick={(e) => {
          e.preventDefault();
          cancelEdit();
        }}
      >
        <span class="material-symbols-outlined">undo</span>
      </button>
    );
  }
}

export default CancelEditButton;
