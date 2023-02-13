import React from "react";

const OnGoingCheckbox = ({ onGoing, sendChanges }) => {
  return (
    <label>
      Ongoing:
      <input
        type={"checkbox"}
        checked={onGoing}
        onChange={() => sendChanges(null, "onGoing")}
      />
    </label>
  );
};

export default OnGoingCheckbox;
