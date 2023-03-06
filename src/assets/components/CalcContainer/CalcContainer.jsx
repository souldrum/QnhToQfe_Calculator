/* eslint-disable react/prop-types */
import React from "react";
import { InputBoxQnh, InputBoxQfe, InputBoxElevation } from "../InputBoxes";
import "./CalcContainer.sass";

const CalcContainer = () => {
    return (
        <main className="calc-container">
            <InputBoxQnh />
            <InputBoxElevation />
            <InputBoxQfe />
        </main>
    );
};

export default CalcContainer;
