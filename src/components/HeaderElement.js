import React from "react";
import EditSubmitButtons from "./EditSubmitButtons";

class HeaderElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", editing: false };
  }
  render() {
    const { headerType, inputType } = this.props;
    let placeholder;
    if (headerType === "name") {
      placeholder = "Name";
    } else if (headerType === "email") {
      placeholder = "Email";
    } else if (headerType === "phone") {
      placeholder = "Phone Number";
    }
    const updateInput = (e) => {
      this.setState({ inputValue: e.target.value });
    };
    const startEdit = () => {
      this.setState({ editing: true });
    };
    const submitEdit = () => {
      this.setState({ editing: false });
    };
    return (
      <>
        {!this.state.editing ? (
          <p>
            {this.state.inputValue.length === 0
              ? placeholder
              : this.state.inputValue}
          </p>
        ) : (
          <input
            type={inputType}
            value={this.state.inputValue}
            onChange={(e) => updateInput(e)}
          ></input>
        )}
        <EditSubmitButtons
          editing={this.state.editing}
          startEdit={startEdit}
          submitEdit={submitEdit}
        />
      </>
    );
  }
}

export default HeaderElement;
