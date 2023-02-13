import React from "react";

const CancelEditButton = ({
  generalClassName,
  specificClassName,
  cancelEdit,
}) => {
  return (
    <button
      className={`${generalClassName} ${specificClassName}`}
      onClick={(e) => {
        e.preventDefault();
        cancelEdit();
      }}
    >
      <span className="material-symbols-outlined">undo</span>
    </button>
  );
};

export default CancelEditButton;
