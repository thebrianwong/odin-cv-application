import React from "react";
import HeaderElement from "./HeaderElement";

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }
  render() {
    const updateHeader = (newValue, headerType) => {
      if (headerType === "name") {
        this.setState({ ...this.state, name: newValue });
      } else if (headerType === "email") {
        this.setState({ ...this.state, email: newValue });
      } else if (headerType === "phone") {
        this.setState({ ...this.state, phone: newValue });
      }
    };
    return (
      <form className="header-section">
        <HeaderElement
          className="header-name"
          value={this.state.name}
          headerType="name"
          inputType="text"
          updateHeader={updateHeader}
        />
        <HeaderElement
          className="header-email"
          value={this.state.email}
          headerType="email"
          inputType="email"
          updateHeader={updateHeader}
        />
        <HeaderElement
          className="header-phone"
          value={this.state.phone}
          headerType="phone"
          inputType="tel"
          updateHeader={updateHeader}
        />
      </form>
    );
  }
}

export default HeaderSection;
