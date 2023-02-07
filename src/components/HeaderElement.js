import React from "react";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";

class HeaderElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", editing: false };
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
    const handleChange = (newValue) => {
      this.setState({ value: newValue });
    };
    const startEdit = (e) => {
      e.preventDefault();
      this.setState({ editing: true });
    };
    const submitEdit = (e) => {
      e.preventDefault();
      this.setState({ editing: false });
    };
    return (
      <div>
        {!this.state.editing ? (
          <p>
            {this.state.value.length === 0 ? placeholder : this.state.value}
          </p>
        ) : (
          <Input
            focus={true}
            previousValue={this.state.value}
            inputType={inputType}
            sendChanges={handleChange}
          />
        )}
        <EditSubmitButtons
          editing={this.state.editing}
          startEdit={startEdit}
          submitEdit={submitEdit}
        />
      </div>
    );
  }
}

export default HeaderElement;
