/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import InputHeader from "../InputHeader";
import InputItem from "../InputItem";
import * as actions from "../../../redux/actionCreators";
import "./InputBox.sass";

const InputBoxQfe = (props) => {
    const { hPa, inHg, mmHg } = props.qfe;
    const { getQfeFromHpa, getQfeFromInhg, getQfeFromMmhg } = props;

    return (
        <section className="input-box qfe">
            <InputHeader title="QFE" />
            <InputItem
                id={"qnhHpa"}
                label={"hPa"}
                placeholder="= 1013"
                onChange={getQfeFromHpa}
                unit={hPa}
            />
            <InputItem
                id={"qnhInHg"}
                label={"inHg"}
                placeholder="= 2992"
                onChange={getQfeFromInhg}
                unit={inHg}
            />
            <InputItem
                id={"qnhMmHg"}
                label={"mmHg"}
                placeholder="= 760"
                onChange={getQfeFromMmhg}
                unit={mmHg}
            />
        </section>
    );
};

const mapStateToProps = ({ qfe }) => ({ qfe });

export default connect(mapStateToProps, actions)(InputBoxQfe);
