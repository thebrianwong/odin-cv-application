import React from "react";
import AddItemButton from "./AddItemButton";
import WorkHistoryElement from "./WorkHistoryElement";

class WorkHistorySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], IDCounter: 0 };
  }
  render() {
    const updateItem = (
      newCompany,
      newTitle,
      newTasks,
      newStartDate,
      newEndDate,
      itemIndex
    ) => {
      const itemsCopy = this.state.items;
      const itemToUpdate = itemsCopy.find((item, index) => {
        return Number(itemIndex) === index;
      });
      itemToUpdate.companyName = newCompany;
      itemToUpdate.title = newTitle;
      itemToUpdate.tasks = newTasks;
      itemToUpdate.employmentDates.start = newStartDate;
      itemToUpdate.employmentDates.end = newEndDate;
      this.setState({ items: itemsCopy });
    };
    const addItem = () => {
      this.setState({
        items: this.state.items.concat({
          companyName: "",
          title: "",
          tasks: [],
          employmentDates: { start: "", end: "" },
          keyID: this.state.IDCounter,
        }),
        IDCounter: this.state.IDCounter + 1,
      });
    };
    return (
      <div className="work-history">
        <h2>Work History</h2>
        {this.state.items.length === 0 && <p>Add your work history here!</p>}
        {this.state.items.map((item, index) => (
          <WorkHistoryElement
            itemIndex={index}
            key={item.keyID}
            companyName={item.companyName}
            title={item.title}
            tasks={item.tasks}
            startDate={item.employmentDates.start}
            endDate={item.employmentDates.end}
            updateItem={updateItem}
            addItem={addItem}
          />
        ))}
        <AddItemButton addItem={addItem} />
      </div>
    );
  }
}

export default WorkHistorySection;
