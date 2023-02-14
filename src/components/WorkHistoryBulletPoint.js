import React, { useState } from "react";
import CancelEditButton from "./CancelEditButton";
import DeleteItemButton from "./DeleteItemButton";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";

const WorkHistoryBulletPoint = ({
  itemIndex,
  taskIndex,
  description,
  updateTask,
  deleteTask,
}) => {
  const [value, setValue] = useState("");
  const [editing, setEditing] = useState(true);

  const handleChanges = (newValue) => {
    setValue(newValue);
  };
  const startEdit = () => {
    setEditing(true);
  };
  const submitEdit = () => {
    setEditing(false);
    updateTask(value, itemIndex, taskIndex);
  };
  const resetState = () => {
    setValue(description);
  };
  const cancelEdit = () => {
    setEditing(false);
    resetState();
  };
  return (
    <li className="task-bullet-point">
      <div>
        {!editing ? (
          <p className="task-bullet-point-description">{description}</p>
        ) : (
          <Input
            focus={true}
            previousValue={value}
            inputType="text"
            sendChanges={handleChanges}
            submitEdit={submitEdit}
            cancelEdit={cancelEdit}
          />
        )}
        <div className="button-group">
          <EditSubmitButtons
            generalClassName="work-history-task-button"
            editClassName="work-history-task-edit-button"
            submitClassName="work-history-task-submit-button"
            editing={editing}
            startEdit={startEdit}
            submitEdit={submitEdit}
          />
          {editing && (
            <CancelEditButton
              generalClassName="work-history-task-button"
              specificClassName="work-history-task-cancel-edit-button"
              cancelEdit={cancelEdit}
            />
          )}
          {!editing && (
            <DeleteItemButton
              generalClassName="work-history-task-button"
              specificClassName="work-history-task-delete-button"
              itemIndex={itemIndex}
              taskIndex={taskIndex}
              deleteFromCollection={deleteTask}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default WorkHistoryBulletPoint;
