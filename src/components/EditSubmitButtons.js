import React from "react";

class EditSubmitButtons extends React.Component {
  render() {
    const { editing, startEdit, submitEdit } = this.props;
    return (
      <>
        {!editing ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              startEdit();
            }}
          >
            <span class="material-symbols-outlined">edit</span>
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              submitEdit();
            }}
          >
            <span class="material-symbols-outlined">done</span>
          </button>
        )}
      </>
    );
  }
}

export default EditSubmitButtons;
