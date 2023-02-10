import React from "react";
import CancelEditButton from "./CancelEditButton";
import DeleteItemButton from "./DeleteItemButton";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";
import OnGoingCheckbox from "./OnGoingCheckbox";

class EducationElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolNameInput: props.schoolName,
      degreeInput: props.degree,
      startDateInput: props.startDate,
      endDateInput: props.endDate,
      onGoing: false,
      editing: true,
    };
  }
  render() {
    const {
      schoolName,
      degree,
      startDate,
      endDate,
      updateItem,
      deleteItem,
      itemIndex,
    } = this.props;
    const handleChange = (value, informationType) => {
      switch (informationType) {
        case "schoolName":
          this.setState({ schoolNameInput: value });
          break;
        case "degree":
          this.setState({ degreeInput: value });
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
        this.state.schoolNameInput,
        this.state.degreeInput,
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
        schoolNameInput: this.props.schoolName,
        degreeInput: this.props.degree,
        startDateInput: this.props.startDate,
        endDateInput: this.props.endDate,
        onGoing: isOnGoing,
      });
    };
    const cancelEdit = () => {
      this.setState({ editing: false });
      resetState();
    };
    return (
      <div>
        {!this.state.editing ? (
          <div>
            <p className="school-name">{schoolName}</p>
            <p className="degree">{degree}</p>
            <p className="start-date">{startDate}</p>
            <p className="end-date">{endDate}</p>
          </div>
        ) : (
          <form>
            <Input
              focus={true}
              label="School Name"
              previousValue={this.state.schoolNameInput}
              inputType="text"
              informationType="schoolName"
              sendChanges={handleChange}
            />
            <Input
              label="Degree"
              previousValue={this.state.degreeInput}
              inputType="text"
              informationType="degree"
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
      </div>
    );
  }
}

export default EducationElement;
