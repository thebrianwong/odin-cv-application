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
            Edit
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              submitEdit();
            }}
          >
            Update
          </button>
        )}
      </>
    );
  }
}

export default EditSubmitButtons;
