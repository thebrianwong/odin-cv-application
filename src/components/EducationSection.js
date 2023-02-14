import React, { useState } from "react";
import AddItemButton from "./AddItemButton";
import EducationElement from "./EducationElement";

const EducationSection = () => {
  const [items, setItems] = useState([]);
  const [IDCounter, setIDCounter] = useState(0);

  const updateItem = (
    newSchool,
    newDegree,
    newStartDate,
    newEndDate,
    itemIndex
  ) => {
    setItems(
      items.map((item) => {
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
      })
    );
  };
  const addItem = () => {
    setItems(
      items.concat({
        schoolName: "",
        degree: "",
        studyDates: { start: "", end: "" },
        itemID: IDCounter,
      })
    );
    setIDCounter(IDCounter + 1);
  };
  const deleteItem = (itemIndex) => {
    setItems(items.filter((item) => item.itemID !== itemIndex));
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
      {items.length === 0 && <p>Add your education here!</p>}
      {items.map((item) => (
        <EducationElement
          itemIndex={item.itemID}
          key={item.itemID}
          schoolName={item.schoolName}
          degree={item.degree}
          startDate={item.studyDates.start}
          endDate={item.studyDates.end}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default EducationSection;
