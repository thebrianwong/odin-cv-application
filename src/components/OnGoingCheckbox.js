import React from "react";

class OnGoingCheckbox extends React.Component {
  render() {
    const { onGoing, handleCheck } = this.props;
    return (
      <label>
        Ongoing:
        <input type={"checkbox"} checked={onGoing} onChange={handleCheck} />
      </label>
    );
  }
}

export default OnGoingCheckbox;
