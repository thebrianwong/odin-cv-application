import React from "react";
import EditSubmitButtons from "./EditSubmitButtons";

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
    const handleChange = (e, information) => {
      if (information === "schoolName") {
        this.setState({ schoolNameInput: e.target.value });
      } else if (information === "degree") {
        this.setState({ degreeInput: e.target.value });
      } else if (information === "startDate") {
        this.setState({ startDateInput: e.target.value });
      } else if (information === "endDate") {
        this.setState({ endDateInput: e.target.value });
      } else if (information === "onGoing") {
        this.setState({ onGoing: !this.state.onGoing });
      }
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
      console.log(this.props);
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
      <>
        {!this.state.editing ? (
          <div>
            <p className="school-name">{schoolName}</p>
            <p className="degree">{degree}</p>
            <p className="start-date">{startDate}</p>
            <p className="end-date">{endDate}</p>
          </div>
        ) : (
          <form>
            <label>
              School Name:
              <input
                type={"text"}
                value={this.state.schoolNameInput}
                onChange={(e) => handleChange(e, "schoolName")}
              />
            </label>
            <label>
              Degree:
              <input
                type={"text"}
                value={this.state.degreeInput}
                onChange={(e) => handleChange(e, "degree")}
              />
            </label>
            <label>
              Start Date:
              <input
                type={"date"}
                value={this.state.startDateInput}
                onChange={(e) => handleChange(e, "startDate")}
              />
            </label>
            <label>
              End Date:
              <input
                disabled={this.state.onGoing}
                type={"date"}
                value={this.state.endDateInput}
                onChange={(e) => handleChange(e, "endDate")}
              />
            </label>
            <label>
              Ongoing:
              <input
                type={"checkbox"}
                checked={this.state.onGoing}
                onChange={(e) => handleChange(e, "onGoing")}
              />
            </label>
          </form>
        )}
        <EditSubmitButtons
          editing={this.state.editing}
          startEdit={startEdit}
          submitEdit={submitEdit}
        />
      </>
    );
  }
}

export default EducationElement;
