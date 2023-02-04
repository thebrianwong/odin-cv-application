import React from "react";

class OnGoingCheckbox extends React.Component {
  render() {
    const { onGoing, sendChanges } = this.props;
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
  }
}

export default OnGoingCheckbox;
