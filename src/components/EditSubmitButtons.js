import React from "react";

class EditSubmitButtons extends React.Component {
  render() {
    const { editing, startEdit, submitEdit } = this.props;
    return (
      <>
        {!editing && <button onClick={startEdit}>Edit</button>}
        {editing && <button onClick={submitEdit}>Update</button>}
      </>
    );
  }
}

export default EditSubmitButtons;
