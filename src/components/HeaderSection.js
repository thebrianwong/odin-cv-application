import React, { useState } from "react";
import HeaderElement from "./HeaderElement";

const HeaderSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const updateHeader = (newValue, headerType) => {
    if (headerType === "name") {
      setName(newValue);
    } else if (headerType === "email") {
      setEmail(newValue);
    } else if (headerType === "phone") {
      setPhone(newValue);
    }
  };

  return (
    <form className="header-section">
      <HeaderElement
        className="header-name"
        startingValue={name}
        headerType="name"
        inputType="text"
        updateHeader={updateHeader}
      />
      <HeaderElement
        className="header-email"
        startingValue={email}
        headerType="email"
        inputType="email"
        updateHeader={updateHeader}
      />
      <HeaderElement
        className="header-phone"
        startingValue={phone}
        headerType="phone"
        inputType="tel"
        updateHeader={updateHeader}
      />
    </form>
  );
};

export default HeaderSection;
