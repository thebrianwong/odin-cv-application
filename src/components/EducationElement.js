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
      <div className="education-item">
        {!this.state.editing ? (
          <div className="contents education-contents">
            <p className="school-name">{schoolName}</p>
            <p className="degree">{degree}</p>
            <p className="start-date">{formatDate(startDate)}</p>
            <p className="end-date">{formatDate(endDate)}</p>
          </div>
        ) : (
          <form className="form-input education-form">
            <ul>
              <li>
                <Input
                  focus={true}
                  label="School Name"
                  previousValue={this.state.schoolNameInput}
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
                  previousValue={this.state.degreeInput}
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
                  previousValue={this.state.startDateInput}
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
                  previousValue={this.state.endDateInput}
                  inputType="date"
                  informationType="endDate"
                  onGoing={this.state.onGoing}
                  sendChanges={handleChange}
                  submitEdit={submitEdit}
                  cancelEdit={cancelEdit}
                />
              </li>
              <li>
                <OnGoingCheckbox
                  onGoing={this.state.onGoing}
                  sendChanges={handleChange}
                />
              </li>
            </ul>
          </form>
        )}
        <div className="button-group">
          <EditSubmitButtons
            generalClassName="education-button"
            editClassName="education-edit-button"
            submitClassName="education-submit-button"
            editing={this.state.editing}
            startEdit={startEdit}
            submitEdit={submitEdit}
          />
          {this.state.editing && (
            <CancelEditButton
              generalClassName="education-button"
              specificClassName="education-cancel-edit-button"
              cancelEdit={cancelEdit}
            />
          )}
          {!this.state.editing && (
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
  }
}

export default EducationElement;
