import React from "react";
import HeaderElement from "./HeaderElement";

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <HeaderElement headerType="name" inputType="text" />
        <HeaderElement headerType="email" inputType="email" />
        <HeaderElement headerType="phone" inputType="tel" />
      </div>
    );
  }
}

export default HeaderSection;
