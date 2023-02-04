import React from "react";
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
    const { schoolName, degree, startDate, endDate, updateItem, itemIndex } =
      this.props;
    const handleChange = (value, informationType) => {
      if (informationType === "schoolName") {
        this.setState({ schoolNameInput: value });
      } else if (informationType === "degree") {
        this.setState({ degreeInput: value });
      } else if (informationType === "startDate") {
        this.setState({ startDateInput: value });
      } else if (informationType === "endDate") {
        this.setState({ endDateInput: value });
      } else if (informationType === "onGoing") {
        this.setState({ onGoing: !this.state.onGoing });
      }
    };
    const handleCheck = () => {
      this.setState({ onGoing: !this.state.onGoing });
    };
    const { schoolName, degree, startDate, endDate, updateItem, itemIndex } =
      this.props;
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
              handleCheck={handleCheck}
            />
          </form>
        )}
        <EditSubmitButtons
          editing={this.state.editing}
          startEdit={startEdit}
          submitEdit={submitEdit}
        />
      </div>
    );
  }
}

export default EducationElement;
