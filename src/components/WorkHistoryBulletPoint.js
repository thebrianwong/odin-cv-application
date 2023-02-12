import React from "react";
import CancelEditButton from "./CancelEditButton";
import DeleteItemButton from "./DeleteItemButton";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";

class WorkHistoryBulletPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", editing: true };
  }
  render() {
    const { itemIndex, taskIndex, description, updateTask, deleteTask } =
      this.props;
    const handleChanges = (newValue) => {
      this.setState({ value: newValue });
    };
    const startEdit = () => {
      this.setState({ editing: true });
    };
    const submitEdit = () => {
      this.setState({ editing: false });
      updateTask(this.state.value, itemIndex, taskIndex);
    };
    const resetState = () => {
      this.setState({ value: this.props.description });
    };
    const cancelEdit = () => {
      this.setState({ editing: false });
      resetState();
    };
    return (
      <li className="task-bullet-point">
        <div>
          {!this.state.editing ? (
            <p className="task-bullet-point-description">{description}</p>
          ) : (
            <Input
              focus={true}
              previousValue={this.state.value}
              inputType="text"
              sendChanges={handleChanges}
              submitEdit={submitEdit}
              cancelEdit={cancelEdit}
            />
          )}
          <div class="button-group">
            <EditSubmitButtons
              generalClassName="work-history-task-button"
              editClassName="work-history-task-edit-button"
              submitClassName="work-history-task-submit-button"
              editing={this.state.editing}
              startEdit={startEdit}
              submitEdit={submitEdit}
            />
            {this.state.editing && (
              <CancelEditButton
                generalClassName="work-history-task-button"
                specificClassName="work-history-task-cancel-edit-button"
                cancelEdit={cancelEdit}
              />
            )}
            {!this.state.editing && (
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
  }
}

export default WorkHistoryBulletPoint;
