/* eslint-disable react/prop-types */
import React from "react";
import "./InputHeader.sass";

const InputHeader = ({ title }) => {
    return <h2 className="input-box__input-header input-header">{title}</h2>;
};

export default InputHeader;
