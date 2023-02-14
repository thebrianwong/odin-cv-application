import React, { useState } from "react";
import AddItemButton from "./AddItemButton";
import CancelEditButton from "./CancelEditButton";
import DeleteItemButton from "./DeleteItemButton";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";
import OnGoingCheckbox from "./OnGoingCheckbox";
import WorkHistoryBulletPoint from "./WorkHistoryBulletPoint";

const WorkHistoryElement = ({
  itemIndex,
  companyName,
  title,
  tasks,
  startDate,
  endDate,
  updateItem,
  addTask,
  updateTask,
  deleteItem,
  deleteTask,
}) => {
  const [companyNameInput, setCompanyNameInput] = useState(companyName);
  const [titleInput, setTitleInput] = useState(title);
  const [startDateInput, setStartDateInput] = useState(startDate);
  const [endDateInput, setEndDateInput] = useState(endDate);
  const [onGoing, setOnGoing] = useState(false);
  const [editing, setEditing] = useState(true);
  const handleChange = (value, informationType) => {
    switch (informationType) {
      case "companyName":
        setCompanyNameInput(value);
        break;
      case "title":
        setTitleInput(value);
        break;
      case "startDate":
        setStartDateInput(value);
        break;
      case "endDate":
        setEndDateInput(value);
        break;
      case "onGoing":
        setOnGoing(!onGoing);
        break;
      default:
        break;
    }
  };
  const resolveEndDate = () => {
    if (onGoing) {
      setEndDateInput("");
      return "Present";
    } else {
      return endDateInput;
    }
  };
  const startEdit = () => {
    setEditing(true);
  };
  const submitEdit = () => {
    setEditing(false);
    const endDate = resolveEndDate();
    updateItem(
      companyNameInput,
      titleInput,
      startDateInput,
      endDate,
      itemIndex
    );
  };
  const resetState = () => {
    let isOnGoing;
    if (endDate === "Present") {
      isOnGoing = true;
    } else {
      isOnGoing = false;
    }
    setCompanyNameInput(companyName);
    setTitleInput(title);
    setStartDateInput(startDate);
    setEndDateInput(endDate);
    setOnGoing(isOnGoing);
  };
  const cancelEdit = () => {
    setEditing(false);
    resetState();
  };
  const formatDate = (rawDate) => {
    if (rawDate === "Present") {
      return rawDate;
    } else if (rawDate === "") {
      return "";
    } else {
      const formatting = {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = new Date(rawDate).toLocaleDateString(
        undefined,
        formatting
      );
      return formattedDate;
    }
  };
  return (
    <div className="work-history-item">
      {!editing ? (
        <div className="contents work-history-contents">
          <p className="company-name">{companyName}</p>
          <p className="work-history-dates">{`${formatDate(
            startDate
          )} - ${formatDate(endDate)}`}</p>
          <p className="title">{title}</p>
        </div>
      ) : (
        <form className="form-input work-history-form">
          <ul>
            <li>
              <Input
                focus={true}
                label="Company Name"
                previousValue={companyNameInput}
                inputType="text"
                informationType="companyName"
                sendChanges={handleChange}
                submitEdit={submitEdit}
                cancelEdit={cancelEdit}
              />
            </li>
            <li>
              <Input
                label="Title"
                previousValue={titleInput}
                inputType="text"
                informationType="title"
                sendChanges={handleChange}
                submitEdit={submitEdit}
                cancelEdit={cancelEdit}
              />
            </li>
            <li>
              <Input
                label="Start Date"
                previousValue={startDateInput}
                inputType="date"
                informationType="startDate"
                sendChanges={handleChange}
                submitEdit={submitEdit}
                cancelEdit={cancelEdit}
              />
            </li>
            <li>
              <Input
                label="End Date"
                previousValue={endDateInput}
                inputType="date"
                informationType="endDate"
                onGoing={onGoing}
                sendChanges={handleChange}
                submitEdit={submitEdit}
                cancelEdit={cancelEdit}
              />
            </li>
            <li>
              <OnGoingCheckbox onGoing={onGoing} sendChanges={handleChange} />
            </li>
          </ul>
        </form>
      )}
      <div className="button-group">
        <EditSubmitButtons
          generalClassName="work-history-button"
          editClassName="work-history-edit-button"
          submitClassName="work-history-submit-button"
          editing={editing}
          startEdit={startEdit}
          submitEdit={submitEdit}
        />
        {editing && (
          <CancelEditButton
            generalClassName="work-history-button"
            specificClassName="work-history-cancel-edit-button"
            cancelEdit={cancelEdit}
          />
        )}
        {!editing && (
          <DeleteItemButton
            generalClassName="work-history-button"
            specificClassName="work-history-delete-button"
            itemIndex={itemIndex}
            deleteFromCollection={deleteItem}
          />
        )}
      </div>
      <div className="work-history-task-subsection">
        <div className="work-history-task-header">
          <h4>Responsibilities</h4>
          <AddItemButton
            generalClassName="add-item-button"
            specificClassName="add-work-history-item-button"
            addItem={() => addTask(itemIndex)}
          />
        </div>
        <ul className="work-history-task-list">
          {tasks.map((task) => (
            <WorkHistoryBulletPoint
              itemIndex={itemIndex}
              taskIndex={task.taskID}
              key={task.taskID}
              description={task.description}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkHistoryElement;
