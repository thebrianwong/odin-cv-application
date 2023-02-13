import React from "react";

const AddItemButton = ({ generalClassName, specificClassName, addItem }) => {
  return (
    <button
      className={`${generalClassName} ${specificClassName}`}
      onClick={addItem}
    >
      <span className="material-symbols-outlined">add</span>
    </button>
  );
};

export default AddItemButton;
