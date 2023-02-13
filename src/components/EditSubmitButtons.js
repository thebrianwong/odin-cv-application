import React from "react";

const EditSubmitButtons = ({
  generalClassName,
  editClassName,
  submitClassName,
  editing,
  startEdit,
  submitEdit,
}) => {
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
          <span className="material-symbols-outlined">edit</span>
        </button>
      ) : (
        <button
          className={`${generalClassName} ${submitClassName}`}
          onClick={(e) => {
            e.preventDefault();
            submitEdit();
          }}
        >
          <span className="material-symbols-outlined">done</span>
        </button>
      )}
    </>
  );
};

export default EditSubmitButtons;
