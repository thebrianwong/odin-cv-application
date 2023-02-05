import React from "react";
import AddItemButton from "./AddItemButton";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";
import OnGoingCheckbox from "./OnGoingCheckbox";
import WorkHistoryBulletPoint from "./WorkHistoryBulletPoint";

class WorkHistoryElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyNameInput: props.companyName,
      titleInput: props.title,
      startDateInput: props.startDate,
      endDateInput: props.endDate,
      onGoing: false,
      editing: true,
      IDCounter: 0,
    };
  }
  render() {
    const {
      itemIndex,
      companyName,
      title,
      tasks,
      startDate,
      endDate,
      updateItem,
      addTask,
      updateTask,
    } = this.props;
    const handleChange = (value, informationType) => {
      switch (informationType) {
        case "companyName":
          this.setState({ companyNameInput: value });
          break;
        case "title":
          this.setState({ titleInput: value });
          break;
        case "startDate":
          this.setState({ startDateInput: value });
          break;
        case "endDate":
          this.setState({ endDateInput: value });
          break;
        case "onGoing":
          this.setState({ onGoing: !this.state.onGoing });
          break;
        default:
          break;
      }
    };
    const resolveEndDate = () => {
      if (this.state.onGoing) {
        this.setState({ endDateInput: "" });
        return "Present";
      } else {
        return this.state.endDateInput;
      }
    };
    const startEdit = () => {
      this.setState({ editing: true });
    };
    const submitEdit = () => {
      this.setState({ editing: false });
      const endDate = resolveEndDate();
      updateItem(
        this.state.companyNameInput,
        this.state.titleInput,
        this.state.startDateInput,
        endDate,
        itemIndex
      );
    };
    return (
      <div>
        {!this.state.editing ? (
          <div>
            <p className="company-name">{companyName}</p>
            <p className="title">{title}</p>
            <p className="start-date">{startDate}</p>
            <p className="end-date">{endDate}</p>
          </div>
        ) : (
          <form>
            <Input
              label="Company Name"
              previousValue={this.state.companyNameInput}
              inputType="text"
              informationType="companyName"
              sendChanges={handleChange}
            />
            <Input
              label="Title"
              previousValue={this.state.titleInput}
              inputType="text"
              informationType="title"
              sendChanges={handleChange}
            />
            <Input
              label="Start Date"
              previousValue={this.state.startDateInput}
              inputType="date"
              informationType="startDate"
              sendChanges={handleChange}
            />
            <Input
              label="End Date"
              previousValue={this.state.endDateInput}
              inputType="date"
              informationType="endDate"
              onGoing={this.state.onGoing}
              sendChanges={handleChange}
            />
            <OnGoingCheckbox
              onGoing={this.state.onGoing}
              sendChanges={handleChange}
            />
          </form>
        )}
        <ul>
          Responsibilities:
          {tasks.map((task, index) => (
            <WorkHistoryBulletPoint
              itemIndex={itemIndex}
              taskIndex={index}
              key={task.keyID}
              description={task.description}
              updateTask={updateTask}
            />
          ))}
        </ul>
        <AddItemButton addItem={() => addTask(itemIndex)} />
        <EditSubmitButtons
          editing={this.state.editing}
          startEdit={startEdit}
          submitEdit={submitEdit}
        />
      </div>
    );
  }
}

export default WorkHistoryElement;
