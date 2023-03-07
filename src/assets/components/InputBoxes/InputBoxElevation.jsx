/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import InputHeader from "../InputHeader";
import InputItem from "../InputItem";
import ResetButton from "../ResetButton";
import * as actions from "../../../redux/actionCreators";
import "./InputBox.sass";

const InputBoxElevation = (props) => {
    const { ft, m } = props.elevation;
    const { getValueFromFeet, getValueFromMeters } = props;

    return (
        <section className="input-box elevation">
            <InputHeader title="Apt Elevation" />
            <InputItem
                id={"feet"}
                label={"feet"}
                placeholder="0"
                onChange={getValueFromFeet}
                unit={ft}
            />
            <InputItem
                id={"meters"}
                label={"meters"}
                placeholder="0"
                onChange={getValueFromMeters}
                unit={m}
            />
            <ResetButton title={"Reset all"} />
        </section>
    );
};

const mapStateToProps = ({ elevation }) => ({ elevation });

export default connect(mapStateToProps, actions)(InputBoxElevation);
