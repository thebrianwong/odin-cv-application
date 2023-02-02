import React from "react";
import Name from "./Name";

class Header extends React.Component {
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

export default Header;
