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
  componentWillUnmount() {
    console.log("INPUT 1");
    const { informationType, sendChanges } = this.props;
    console.log(this.state.inputValue, informationType);
    sendChanges(this.state.inputValue, informationType);
    console.log("INPUT 2");
  }
  render() {
    const { focus, label, inputType, informationType, onGoing, sendChanges } =
      this.props;
    const test = () => {
      return;
    };
    const handleChanges = (e) => {
      this.setState({ inputValue: e.target.value });
    };
    return (
      <label>
        {label && label.length > 0 && `${label}:`}
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
