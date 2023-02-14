import React, { useState } from "react";
import AddItemButton from "./AddItemButton";
import WorkHistoryElement from "./WorkHistoryElement";

const WorkHistorySection = () => {
  const [items, setItems] = useState([]);
  const [IDCounter, setIDCounter] = useState(0);
  const updateTask = (newDescription, itemIndex, taskIndex) => {
    setItems(
      items.map((item) => {
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
      })
    );
  };
  const addTask = (itemIndex) => {
    setItems(
      items.map((item) => {
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
      })
    );
  };
  const deleteTask = (itemIndex, taskIndex) => {
    setItems(
      items.map((item) => {
        if (item.itemID === itemIndex) {
          return {
            ...item,
            tasks: item.tasks.filter((task) => task.taskID !== taskIndex),
          };
        } else {
          return item;
        }
      })
    );
  };
  const updateItem = (
    newCompany,
    newTitle,
    newStartDate,
    newEndDate,
    itemIndex
  ) => {
    setItems(
      items.map((item) => {
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
      })
    );
  };
  const addItem = () => {
    setItems(
      items.concat({
        companyName: "",
        title: "",
        tasks: [],
        employmentDates: { start: "", end: "" },
        itemID: IDCounter,
        IDCounter: 0,
      })
    );
    setIDCounter(IDCounter + 1);
  };
  const deleteItem = (itemIndex) => {
    setItems(items.filter((item) => item.itemID !== itemIndex));
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
      {items.length === 0 && <p>Add your work history here!</p>}
      {items.map((item) => (
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
};

export default WorkHistorySection;
