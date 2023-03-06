/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actionCreators";
import "./ResetButton.sass";

const ResetButton = ({ onResetInputs }) => {
    const onReset = (e) => {
        e.preventDefault();
        onResetInputs();
    };

    return (
        <button
            className="input-box__reset-btn btn"
            type="button"
            onClick={onReset}
        >
            Reset all
        </button>
    );
};

const mapStateToProps = ({ ...state }) => ({ state });

export default connect(mapStateToProps, actions)(ResetButton);
