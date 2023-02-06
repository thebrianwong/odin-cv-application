import React from "react";
import AddItemButton from "./AddItemButton";
import EducationElement from "./EducationElement";

class EducationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      IDCounter: 0,
    };
  }
  render() {
    const updateItem = (
      newSchool,
      newDegree,
      newStartDate,
      newEndDate,
      itemIndex
    ) => {
      this.setState({
        items: this.state.items.map((item) => {
          if (item.itemID === itemIndex) {
            return {
              ...item,
              schoolName: newSchool,
              degree: newDegree,
              studyDates: { start: newStartDate, end: newEndDate },
            };
          } else {
            return item;
          }
        }),
      });
    };
    const addItem = () => {
      this.setState({
        items: this.state.items.concat({
          schoolName: "",
          degree: "",
          studyDates: { start: "", end: "" },
          itemID: this.state.IDCounter,
        }),
        IDCounter: this.state.IDCounter + 1,
      });
    };
    return (
      <div className="education">
        <h2>Education</h2>
        {this.state.items.length === 0 && <p>Add your education here!</p>}
        {this.state.items.map((item) => (
          <EducationElement
            itemIndex={item.itemID}
            key={item.itemID}
            schoolName={item.schoolName}
            degree={item.degree}
            startDate={item.studyDates.start}
            endDate={item.studyDates.end}
            updateItem={updateItem}
            addItem={addItem}
          />
        ))}
        <AddItemButton buttonLabel="Add new education" addItem={addItem} />
      </div>
    );
  }
}

export default EducationSection;
