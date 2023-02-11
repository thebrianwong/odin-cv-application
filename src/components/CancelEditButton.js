import React from "react";

class CancelEditButton extends React.Component {
  render() {
    const { cancelEdit } = this.props;
    return (
      <button
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
