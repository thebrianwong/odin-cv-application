import React from "react";
import HeaderElement from "./HeaderElement";

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <Name />
      </div>
    );
  }
}

export default HeaderSection;
