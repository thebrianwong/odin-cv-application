import React from "react";
import EditSubmitButtons from "./EditSubmitButtons";

class EducationElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "University of Cookies",
      degree: "Snickerdoodle's Degree",
      studyDates: { start: "2000-08-08", end: "2200-08-08" },
      editing: false,
    };
  }
  render() {
    const updateInput = (e, information) => {
      if (information === "schoolName") {
        this.setState({ schoolName: e.target.value });
      } else if (information === "degree") {
        this.setState({ degree: e.target.value });
      } else if (information === "startDate") {
        const studyDates = { ...this.state.studyDates };
        studyDates.start = e.target.value;
        this.setState({ studyDates });
      } else if (information === "endDate") {
        const studyDates = { ...this.state.studyDates };
        studyDates.end = e.target.value;
        this.setState({ studyDates });
      }
    };
    const startEdit = () => {
      this.setState({ editing: true });
    };
    const submitEdit = () => {
      this.setState({ editing: false });
    };
    return (
      <>
        {!this.state.editing ? (
          <div>
            <p className="school-name">{this.state.schoolName}</p>
            <p className="degree">{this.state.degree}</p>
            <p className="start-date">{this.state.studyDates.start}</p>
            <p className="end-date">{this.state.studyDates.end}</p>
          </div>
        ) : (
          <form>
            <label>
              School Name
              <input
                type={"text"}
                value={this.state.schoolName}
                onChange={(e) => updateInput(e, "schoolName")}
              />
            </label>
            <label>
              Degree
              <input
                type={"text"}
                value={this.state.degree}
                onChange={(e) => updateInput(e, "degree")}
              />
            </label>
            <label>
              Start Date
              <input
                type={"date"}
                value={this.state.studyDates.start}
                onChange={(e) => updateInput(e, "startDate")}
              />
            </label>
            <label>
              End Date
              <input
                type={"date"}
                value={this.state.studyDates.end}
                onChange={(e) => updateInput(e, "endDate")}
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
