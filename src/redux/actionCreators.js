import {
    FEET_FROM_METERS,
    METERS_FROM_FEET,
    QFE_FROM_HPA,
    QFE_FROM_INHG,
    QFE_FROM_MMHG,
    QNH_FROM_HPA,
    QNH_FROM_INHG,
    QNH_FROM_MMHG,
    RESET,
} from "./actionTypes";

//QNH
export function getQnhFromHpa(value) {
    return {
        type: QNH_FROM_HPA,
        payload: value,
    };
}

export function getQnhFromInhg(value) {
    return {
        type: QNH_FROM_INHG,
        payload: value,
    };
}

export function getQnhFromMmhg(value) {
    return {
        type: QNH_FROM_MMHG,
        payload: value,
    };
}

//ELEVATION
export function getValueFromFeet(value) {
    return {
        type: METERS_FROM_FEET,
        payload: value,
    };
}

export function getValueFromMeters(value) {
    return {
        type: FEET_FROM_METERS,
        payload: value,
    };
}

//QFE
export function getQfeFromHpa(value) {
    return {
        type: QFE_FROM_HPA,
        payload: value,
    };
}

export function getQfeFromInhg(value) {
    return {
        type: QFE_FROM_INHG,
        payload: value,
    };
}

export function getQfeFromMmhg(value) {
    return {
        type: QFE_FROM_MMHG,
        payload: value,
    };
}

//RESET
export function onResetInputs() {
    return {
        type: RESET,
    };
}
