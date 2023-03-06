/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import InputHeader from "../InputHeader";
import InputItem from "../InputItem";
import * as actions from "../../../redux/actionCreators";
import "./InputBox.sass";

const InputBoxQnh = (props) => {
    const { hPa, inHg, mmHg } = props.qnh;
    const { getQnhFromHpa, getQnhFromInhg, getQnhFromMmhg } = props;

    return (
        <section className="input-box qnh">
            <InputHeader title="QNH" />
            <InputItem
                id={"qnhHpa"}
                label={"hPa"}
                placeholder="1013"
                onChange={getQnhFromHpa}
                unit={hPa}
            />
            <InputItem
                id={"qnhInHg"}
                label={"inHg"}
                placeholder="2992"
                onChange={getQnhFromInhg}
                unit={inHg}
            />
            <InputItem
                id={"qnhMmHg"}
                label={"mmHg"}
                placeholder="760"
                onChange={getQnhFromMmhg}
                unit={mmHg}
            />
        </section>
    );
};

const mapStateToProps = ({ qnh }) => ({ qnh });

export default connect(mapStateToProps, actions)(InputBoxQnh);
