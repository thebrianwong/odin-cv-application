import React, { useState } from "react";
import CancelEditButton from "./CancelEditButton";
import EditSubmitButtons from "./EditSubmitButtons";
import Input from "./Input";

const HeaderElement = ({
  className,
  startingValue,
  headerType,
  inputType,
  updateHeader,
}) => {
  const [value, setValue] = useState(startingValue);
  const [editing, setEditing] = useState(false);

  const determinePlaceholder = () => {
    if (headerType === "name") {
      return "Name";
    } else if (headerType === "email") {
      return "Email";
    } else if (headerType === "phone") {
      return "Phone Number";
    }
  };
  const placeholder = determinePlaceholder();

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const startEdit = () => {
    setEditing(true);
  };
  const submitEdit = () => {
    setEditing(false);
    updateHeader(value, headerType);
  };
  const resetState = () => {
    setValue(startingValue);
  };
  const cancelEdit = () => {
    setEditing(false);
    resetState();
  };

  return (
    <div className="header-item">
      {!editing ? (
        <p className={`header-text ${className}`}>
          {value.length === 0 ? placeholder : value}
        </p>
      ) : (
        <Input
          focus={true}
          label={placeholder}
          className="header-input"
          previousValue={value}
          inputType={inputType}
          informationType={headerType}
          sendChanges={handleChange}
          submitEdit={submitEdit}
          cancelEdit={cancelEdit}
        />
      )}
      <EditSubmitButtons
        generalClassName="header-button"
        editClassName="header-edit-button"
        submitClassName="header-submit-button"
        editing={editing}
        startEdit={startEdit}
        submitEdit={submitEdit}
      />
      {editing && (
        <CancelEditButton
          generalClassName="header-button"
          specificClassName="header-cancel-edit-button"
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};

export default HeaderElement;
