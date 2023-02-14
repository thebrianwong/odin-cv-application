import React, { useState } from "react";
import CancelEditButton from "./CancelEditButton";
import DeleteItemButton from "./DeleteItemButton";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";
import OnGoingCheckbox from "./OnGoingCheckbox";

const EducationElement = ({
  schoolName,
  degree,
  startDate,
  endDate,
  updateItem,
  deleteItem,
  itemIndex,
}) => {
  const [schoolNameInput, setSchoolNameInput] = useState(schoolName);
  const [degreeInput, setDegreeInput] = useState(degree);
  const [startDateInput, setStartDateInput] = useState(startDate);
  const [endDateInput, setEndDateInput] = useState(endDate);
  const [onGoing, setOnGoing] = useState(false);
  const [editing, setEditing] = useState(true);
  const handleChange = (value, informationType) => {
    switch (informationType) {
      case "schoolName":
        setSchoolNameInput(value);
        break;
      case "degree":
        setDegreeInput(value);
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
      schoolNameInput,
      degreeInput,
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
    setSchoolNameInput(schoolName);
    setDegreeInput(degree);
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
    <div className="education-item">
      {!editing ? (
        <div className="contents education-contents">
          <p className="school-name">{schoolName}</p>
          <p className="education-dates">{`${formatDate(
            startDate
          )} - ${formatDate(endDate)}`}</p>
          <p className="degree">{degree}</p>
        </div>
      ) : (
        <form className="form-input education-form">
          <ul>
            <li>
              <Input
                focus={true}
                label="School Name"
                previousValue={schoolNameInput}
                inputType="text"
                informationType="schoolName"
                sendChanges={handleChange}
                submitEdit={submitEdit}
                cancelEdit={cancelEdit}
              />
            </li>
            <li>
              <Input
                label="Degree"
                previousValue={degreeInput}
                inputType="text"
                informationType="degree"
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
          generalClassName="education-button"
          editClassName="education-edit-button"
          submitClassName="education-submit-button"
          editing={editing}
          startEdit={startEdit}
          submitEdit={submitEdit}
        />
        {editing && (
          <CancelEditButton
            generalClassName="education-button"
            specificClassName="education-cancel-edit-button"
            cancelEdit={cancelEdit}
          />
        )}
        {!editing && (
          <DeleteItemButton
            generalClassName="education-button"
            specificClassName="education-delete-button"
            itemIndex={itemIndex}
            deleteFromCollection={deleteItem}
          />
        )}
      </div>
    </div>
  );
};

export default EducationElement;
