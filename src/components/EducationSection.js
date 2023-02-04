import React from "react";
import AddItemButton from "./AddItemButton";
import EducationElement from "./EducationElement";

class EducationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          schoolName: "University of Cookies",
          degree: "Snickerdoodle's Degree",
          studyDates: { start: "2000-08-08", end: "2200-08-08" },
          keyID: 0,
        },
      ],
      IDCounter: 1,
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
      const itemsCopy = this.state.items;
      const itemToUpdate = itemsCopy.find((item, index) => {
        return Number(itemIndex) === index;
      });
      itemToUpdate.schoolName = newSchool;
      itemToUpdate.degree = newDegree;
      itemToUpdate.studyDates.start = newStartDate;
      itemToUpdate.studyDates.end = newEndDate;
      this.setState({ items: itemsCopy });
    };
    const addItem = () => {
      this.setState({
        items: this.state.items.concat({
          schoolName: "University of Cookies",
          degree: "Snickerdoodle's Degree",
          studyDates: { start: "2000-08-08", end: "2200-08-08" },
          keyID: this.state.IDCounter,
        }),
        IDCounter: this.state.IDCounter + 1,
      });
    };
    return (
      <>
        <div className="education">
          {this.state.items.map((item, index) => (
            <EducationElement
              itemIndex={index}
              key={item.keyID}
              schoolName={item.schoolName}
              degree={item.degree}
              startDate={item.studyDates.start}
              endDate={item.studyDates.end}
              updateItem={updateItem}
              addItem={addItem}
            />
          ))}
        </div>
        <AddItemButton addItem={addItem} />
      </>
    );
  }
}

export default EducationSection;
