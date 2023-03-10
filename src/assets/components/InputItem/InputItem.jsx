/* eslint-disable react/prop-types */
import React from "react";
import "./InputItem.sass";

const InputItem = ({ unit, id, label, placeholder, onChange }) => {
    let maxLength;
    switch (id) {
        case "feet":
            maxLength = "5";
            break;
        case "qnhMmHg":
            maxLength = "3";
            break;
        case "qfeMmHg":
            maxLength = "3";
            break;
        default:
            maxLength = "4";
            break;
    }

    const onChangeInput = (e) => {
        //for cut input[type="number"] length
        if (e.target.value.length > maxLength) {
            e.target.value = e.target.value.slice(0, maxLength);
        }
        //===================================
        onChange(e.target.value);
    };

    return (
        <div className="input-box__input input">
            <label className="input__label" htmlFor={id}>
                {label}:
            </label>
            <input
                className="input__field"
                type="number"
                id={id}
                name={id}
                placeholder={placeholder}
                onChange={onChangeInput}
                value={unit > 0 ? unit : ""}
            />
        </div>
    );
};

export default InputItem;
