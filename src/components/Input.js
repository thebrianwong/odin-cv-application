import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    if (props.focus) {
      this.input = React.createRef();
    }
    this.state = { inputValue: props.previousValue };
  }
  componentDidMount() {
    if (this.props.focus) {
      this.input.current.focus();
    }
  }
  render() {
    const { focus, label, inputType, informationType, onGoing, sendChanges } =
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
          ref={focus ? this.input : undefined}
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
