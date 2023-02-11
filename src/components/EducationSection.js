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
    const deleteItem = (itemIndex) => {
      this.setState({
        ...this.state,
        items: this.state.items.filter((item) => item.itemID !== itemIndex),
      });
    };
    return (
      <div className="education-section">
        <div className="education-header">
          <h2>Education</h2>
          <AddItemButton
            generalClassName="add-item-button"
            specificClassName="add-education-item-button"
            addItem={addItem}
          />
        </div>
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
            deleteItem={deleteItem}
          />
        ))}
      </div>
    );
  }
}

export default EducationSection;
