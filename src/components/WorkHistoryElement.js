import React from "react";
import AddItemButton from "./AddItemButton";
import CancelEditButton from "./CancelEditButton";
import DeleteItemButton from "./DeleteItemButton";
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
      deleteItem,
      deleteTask,
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
    const resetState = () => {
      let isOnGoing;
      if (this.props.endDate === "Present") {
        isOnGoing = true;
      } else {
        isOnGoing = false;
      }
      this.setState({
        companyNameInput: this.props.companyName,
        titleInput: this.props.title,
        startDateInput: this.props.startDate,
        endDateInput: this.props.endDate,
        onGoing: isOnGoing,
      });
    };
    const cancelEdit = () => {
      this.setState({ editing: false });
      resetState();
    };
    const formatDate = (rawDate) => {
      console.log(rawDate);
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
      <div>
        {!this.state.editing ? (
          <div>
            <p className="company-name">{companyName}</p>
            <p className="title">{title}</p>
            <p className="start-date">{formatDate(startDate)}</p>
            <p className="end-date">{formatDate(endDate)}</p>
          </div>
        ) : (
          <form>
            <Input
              focus={true}
              label="Company Name"
              previousValue={this.state.companyNameInput}
              inputType="text"
              informationType="companyName"
              sendChanges={handleChange}
              submitEdit={submitEdit}
              cancelEdit={cancelEdit}
            />
            <Input
              label="Title"
              previousValue={this.state.titleInput}
              inputType="text"
              informationType="title"
              sendChanges={handleChange}
              submitEdit={submitEdit}
              cancelEdit={cancelEdit}
            />
            <Input
              label="Start Date"
              previousValue={this.state.startDateInput}
              inputType="date"
              informationType="startDate"
              sendChanges={handleChange}
              submitEdit={submitEdit}
              cancelEdit={cancelEdit}
            />
            <Input
              label="End Date"
              previousValue={this.state.endDateInput}
              inputType="date"
              informationType="endDate"
              onGoing={this.state.onGoing}
              sendChanges={handleChange}
              submitEdit={submitEdit}
              cancelEdit={cancelEdit}
            />
            <OnGoingCheckbox
              onGoing={this.state.onGoing}
              sendChanges={handleChange}
            />
          </form>
        )}
        <EditSubmitButtons
          editing={this.state.editing}
          startEdit={startEdit}
          submitEdit={submitEdit}
        />
        {this.state.editing && <CancelEditButton cancelEdit={cancelEdit} />}
        {!this.state.editing && (
          <DeleteItemButton
            itemIndex={itemIndex}
            deleteFromCollection={deleteItem}
          />
        )}
        <h3>Responsibilities</h3>
        <AddItemButton addItem={() => addTask(itemIndex)} />
        <ul>
          {tasks.map((task, index) => (
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
    );
  }
}

export default WorkHistoryElement;
