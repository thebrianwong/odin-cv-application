import React from "react";
import AddItemButton from "./AddItemButton";
import EducationElement from "./EducationElement";

class EducationSection extends React.Component {
  render() {
    return (
      <>
        <div className="education">
          <EducationElement />
        </div>
        <AddItemButton />
      </>
    );
  }
}

export default EducationSection;
