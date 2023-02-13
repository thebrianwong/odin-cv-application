import React, { useState, useRef, useEffect } from "react";

const Input = ({
  focus,
  label,
  previousValue,
  inputType,
  informationType,
  onGoing,
  sendChanges,
  submitEdit,
  cancelEdit,
}) => {
  const [inputValue, setInputValue] = useState(previousValue);
  const inputRef = useRef(null);

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    sendChanges(inputValue, informationType);
  }, [inputValue]);

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <label>
      {label && label.length > 0 && `${label}:`}
      <input
        ref={focus ? inputRef : undefined}
        disabled={onGoing}
        type={inputType}
        value={inputValue}
        onChange={(e) => handleChanges(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submitEdit();
          } else if (e.key === "Escape") {
            cancelEdit();
          }
        }}
      />
    </label>
  );
};

export default Input;
