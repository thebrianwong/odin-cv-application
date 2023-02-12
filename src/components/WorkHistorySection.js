import React from "react";
import AddItemButton from "./AddItemButton";
import WorkHistoryElement from "./WorkHistoryElement";

class WorkHistorySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], IDCounter: 0 };
  }
  render() {
    const updateTask = (newDescription, itemIndex, taskIndex) => {
      this.setState({
        items: this.state.items.map((item) => {
          if (item.itemID === itemIndex) {
            return {
              ...item,
              tasks: item.tasks.map((task) => {
                if (task.taskID === taskIndex) {
                  return {
                    ...task,
                    description: newDescription,
                  };
                } else {
                  return task;
                }
              }),
            };
          } else {
            return item;
          }
        }),
      });
    };
    const addTask = (itemIndex) => {
      this.setState({
        items: this.state.items.map((item) => {
          if (item.itemID === itemIndex) {
            return {
              ...item,
              tasks: item.tasks.concat({
                description: "",
                taskID: item.IDCounter,
              }),
              IDCounter: item.IDCounter + 1,
            };
          } else {
            return item;
          }
        }),
      });
    };
    const deleteTask = (itemIndex, taskIndex) => {
      this.setState({
        items: this.state.items.map((item) => {
          if (item.itemID === itemIndex) {
            return {
              ...item,
              tasks: item.tasks.filter((task) => task.taskID !== taskIndex),
            };
          } else {
            return item;
          }
        }),
      });
    };
    const updateItem = (
      newCompany,
      newTitle,
      newStartDate,
      newEndDate,
      itemIndex
    ) => {
      this.setState({
        items: this.state.items.map((item) => {
          if (item.itemID === itemIndex) {
            return {
              ...item,
              companyName: newCompany,
              title: newTitle,
              employmentDates: { start: newStartDate, end: newEndDate },
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
          companyName: "",
          title: "",
          tasks: [],
          employmentDates: { start: "", end: "" },
          itemID: this.state.IDCounter,
          IDCounter: 0,
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
      <div className="work-history-section">
        <div className="work-history-header">
          <h2>Work History</h2>
          <AddItemButton
            generalClassName="add-item-button"
            specificClassName="add-work-history-item-button"
            addItem={addItem}
          />
        </div>
        {this.state.items.length === 0 && <p>Add your work history here!</p>}
        {this.state.items.map((item) => (
          <WorkHistoryElement
            itemIndex={item.itemID}
            key={item.itemID}
            companyName={item.companyName}
            title={item.title}
            tasks={item.tasks}
            startDate={item.employmentDates.start}
            endDate={item.employmentDates.end}
            updateItem={updateItem}
            addTask={addTask}
            updateTask={updateTask}
            deleteItem={deleteItem}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    );
  }
}

export default WorkHistorySection;
