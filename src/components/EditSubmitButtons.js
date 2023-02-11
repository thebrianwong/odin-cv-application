import React from "react";

class EditSubmitButtons extends React.Component {
  render() {
    const {
      generalClassName,
      editClassName,
      submitClassName,
      editing,
      startEdit,
      submitEdit,
    } = this.props;
    return (
      <>
        {!editing ? (
          <button
            className={`${generalClassName} ${editClassName}`}
            onClick={(e) => {
              e.preventDefault();
              startEdit();
            }}
          >
            <span class="material-symbols-outlined">edit</span>
          </button>
        ) : (
          <button
            className={`${generalClassName} ${submitClassName}`}
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
