import React from "react";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";

class WorkHistoryBulletPoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", editing: true };
  }
  render() {
    const { itemIndex, taskIndex, description, updateTask } = this.props;
    const handleChanges = (newValue) => {
      this.setState({ inputValue: newValue });
    };
    const startEdit = () => {
      this.setState({ editing: true });
    };
    const submitEdit = () => {
      this.setState({ editing: false });
      updateTask(this.state.inputValue, itemIndex, taskIndex);
    };
    return (
      <li>
        <div>
          {!this.state.editing ? (
            <p className="task-bullet-point">{description}</p>
          ) : (
            <Input
              label=""
              previousValue={this.state.inputValue}
              inputType="text"
              sendChanges={handleChanges}
            />
          )}
          <EditSubmitButtons
            editing={this.state.editing}
            startEdit={startEdit}
            submitEdit={submitEdit}
          />
        </div>
      </li>
    );
  }
}

export default WorkHistoryBulletPoint;