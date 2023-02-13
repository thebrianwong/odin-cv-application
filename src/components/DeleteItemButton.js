import React from "react";

const DeleteItemButton = ({
  generalClassName,
  specificClassName,
  itemIndex,
  taskIndex,
  deleteFromCollection,
}) => {
  return (
    <button
      className={`${generalClassName} ${specificClassName}`}
      onClick={() => deleteFromCollection(itemIndex, taskIndex)}
    >
      <span className="material-symbols-outlined">close</span>
    </button>
  );
};

export default DeleteItemButton;
