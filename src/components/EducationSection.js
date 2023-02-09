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
    const resolveEndDate = (endDateValue, onGoing) => {
      if (onGoing) {
        return "Present";
      } else {
        return endDateValue;
      }
    };
    const testUpdateItem = (newValue, valueType, itemIndex, onGoing) => {
      const test = new Date();
      console.log(test, test.getMilliseconds());
      const testArray = this.state.items.map((item) => {
        console.log(item, test, test.getMilliseconds());
        console.log(item);
        if (item.itemID === itemIndex) {
          let updatedItem;
          if (valueType === "schoolName") {
            item = {
              ...item,
              schoolName: newValue,
            };
          } else if (valueType === "degree") {
            item = {
              ...item,
              degree: newValue,
            };
          } else if (valueType === "startDate") {
            item = {
              ...item,
              studyDates: { ...item.studyDates, start: newValue },
            };
          } else if (valueType === "endDate") {
            console.log({ ...this.state.items });
            const endDate = resolveEndDate(newValue, onGoing);
            item = {
              ...item,
              studyDates: { ...item.studyDates, end: endDate },
            };
          }
          console.log(item);
          return item;
        } else {
          return item;
        }
      });
      console.log(testArray);
      // setTimeout(() => {
      //   this.setState({
      //     items: this.state.items.map((item) => {
      //       if (item.itemID === itemIndex) {
      //         let updatedItem;
      //         if (valueType === "schoolName") {
      //           updatedItem = {
      //             ...item,
      //             schoolName: newValue,
      //           };
      //         } else if (valueType === "degree") {
      //           updatedItem = {
      //             ...item,
      //             degree: newValue,
      //           };
      //         } else if (valueType === "startDate") {
      //           updatedItem = {
      //             ...item,
      //             studyDates: { ...item.studyDates, start: newValue },
      //           };
      //         } else if (valueType === "endDate") {
      //           console.log({ ...this.state.items });
      //           const endDate = resolveEndDate(newValue, onGoing);
      //           updatedItem = {
      //             ...item,
      //             studyDates: { ...item.studyDates, end: endDate },
      //           };
      //         }
      //         console.log(updatedItem);
      //         return updatedItem;
      //       } else {
      //         return item;
      //       }
      //     }),
      //   });
      // }, 0);
      this.setState({
        items: this.state.items.map((item) => {
          console.log(item);
          let updatedItem;
          if (item.itemID === itemIndex) {
            if (valueType === "schoolName") {
              updatedItem = {
                ...item,
                schoolName: newValue,
              };
            } else if (valueType === "degree") {
              updatedItem = {
                ...item,
                degree: newValue,
              };
            } else if (valueType === "startDate") {
              updatedItem = {
                ...item,
                studyDates: { ...item.studyDates, start: newValue },
              };
            } else if (valueType === "endDate") {
              console.log({ ...this.state.items });
              const endDate = resolveEndDate(newValue, onGoing);
              updatedItem = {
                ...item,
                studyDates: { ...item.studyDates, end: endDate },
              };
            }
            // console.log(updatedItem);
            // return updatedItem;
          } else {
            // return item;
            updatedItem = item;
          }
          return updatedItem;
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
      <div className="education">
        <h2>Education</h2>
        <AddItemButton buttonLabel="Add new education" addItem={addItem} />
        {this.state.items.length === 0 && <p>Add your education here!</p>}
        {this.state.items.map((item) => (
          <EducationElement
            itemIndex={item.itemID}
            key={item.itemID}
            schoolName={item.schoolName}
            degree={item.degree}
            startDate={item.studyDates.start}
            endDate={item.studyDates.end}
            updateItem={testUpdateItem}
            addItem={addItem}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    );
  }
}

export default EducationSection;
