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
        Cancel
      </button>
    );
  }
}

export default CancelEditButton;
