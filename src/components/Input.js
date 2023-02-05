import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: props.previousValue };
  }
  render() {
    const { label, inputType, informationType, onGoing, sendChanges } =
      this.props;
    const handleChanges = (e) => {
      this.setState({ inputValue: e.target.value }, () =>
        sendChanges(this.state.inputValue, informationType)
      );
    };
    return (
      <label>
        {label.length > 0 && `${label}:`}
        <input
          disabled={onGoing}
          type={inputType}
          value={this.state.inputValue}
          onChange={(e) => handleChanges(e)}
        />
      </label>
    );
  }
}

export default Input;
