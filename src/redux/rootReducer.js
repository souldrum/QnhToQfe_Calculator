import calc from "../services";
import {
    QNH_FROM_HPA,
    QNH_FROM_INHG,
    QNH_FROM_MMHG,
    QFE_FROM_HPA,
    QFE_FROM_INHG,
    QFE_FROM_MMHG,
    METERS_FROM_FEET,
    FEET_FROM_METERS,
    RESET,
} from "./actionTypes";

const initialState = {
    qnh: { hPa: "", inHg: "", mmHg: "" },
    elevation: { ft: "", m: "" },
    qfe: { hPa: "", inHg: "", mmHg: "" },
};

let qnhHpa, qnhInHg, qnhMmHg, elevFt, elevM, qfeHpa, qfeInHg, qfeMmHg;

const handlers = {
    [QNH_FROM_HPA]: (state, { payload }) => {
        qnhHpa = payload;
        elevFt = state.elevation.ft;
        qfeHpa = calc.getResultQfeHpa(qnhHpa, elevFt);

        return {
            ...state,
            qnh: {
                hPa: qnhHpa,
                inHg: calc.getInHgFromHpa(qnhHpa),
                mmHg: calc.getMmHgFromHpa(qnhHpa),
            },
            qfe: {
                hPa: qfeHpa,
                inHg: calc.getInHgFromHpa(qfeHpa),
                mmHg: calc.getMmHgFromHpa(qfeHpa),
            },
        };
    },
    [QNH_FROM_INHG]: (state, { payload }) => {
        qnhInHg = payload;
        qnhHpa = calc.getHpaFromInHg(qnhInHg);
        elevFt = state.elevation.ft;
        qfeHpa = calc.getResultQfeHpa(qnhHpa, elevFt);

        return {
            ...state,
            qnh: {
                hPa: qnhHpa,
                inHg: qnhInHg,
                mmHg: calc.getMmHgFromInHg(qnhInHg),
            },
            qfe: {
                hPa: qfeHpa,
                inHg: calc.getInHgFromHpa(qfeHpa),
                mmHg: calc.getMmHgFromHpa(qfeHpa),
            },
        };
    },
    [QNH_FROM_MMHG]: (state, { payload }) => {
        qnhMmHg = payload;
        qnhHpa = calc.getHpaFromMmHg(qnhMmHg);
        elevFt = state.elevation.ft;
        qfeHpa = calc.getResultQfeHpa(qnhHpa, elevFt);
        return {
            ...state,
            qnh: {
                hPa: qnhHpa,
                inHg: calc.getInHgFromMmHg(qnhMmHg),
                mmHg: qnhMmHg,
            },
            qfe: {
                hPa: qfeHpa,
                inHg: calc.getInHgFromHpa(qfeHpa),
                mmHg: calc.getMmHgFromHpa(qfeHpa),
            },
        };
    },
    [METERS_FROM_FEET]: (state, { payload }) => {
        elevFt = payload;
        qnhHpa = state.qnh.hPa;
        qfeHpa = calc.getResultQfeHpa(qnhHpa, elevFt);
        return {
            ...state,
            elevation: {
                ft: elevFt,
                m: calc.getMetersFromFeet(elevFt),
            },
            qfe: {
                hPa: qfeHpa,
                inHg: calc.getInHgFromHpa(qfeHpa),
                mmHg: calc.getMmHgFromHpa(qfeHpa),
            },
        };
    },
    [FEET_FROM_METERS]: (state, { payload }) => {
        qnhHpa = state.qnh.hPa;
        elevM = payload;
        elevFt = calc.getFeetFromMeters(elevM);
        qfeHpa = calc.getResultQfeHpa(qnhHpa, elevFt);
        return {
            ...state,
            elevation: {
                ft: elevFt,
                m: elevM,
            },
            qfe: {
                hPa: qfeHpa,
                inHg: calc.getInHgFromHpa(qfeHpa),
                mmHg: calc.getMmHgFromHpa(qfeHpa),
            },
        };
    },
    [QFE_FROM_HPA]: (state, { payload }) => {
        qfeHpa = payload;
        elevFt = state.elevation.ft;
        qnhHpa = calc.getResultQnhHpa(qfeHpa, elevFt);
        return {
            ...state,
            qnh: {
                hPa: qnhHpa,
                inHg: calc.getInHgFromHpa(qnhHpa),
                mmHg: calc.getMmHgFromHpa(qnhHpa),
            },
            qfe: {
                hPa: qfeHpa,
                inHg: calc.getInHgFromHpa(qfeHpa),
                mmHg: calc.getMmHgFromHpa(qfeHpa),
            },
        };
    },
    [QFE_FROM_INHG]: (state, { payload }) => {
        qfeInHg = payload;
        elevFt = state.elevation.ft;
        qfeHpa = calc.getHpaFromInHg(qfeInHg);
        qnhHpa = calc.getResultQnhHpa(qfeHpa, elevFt);
        return {
            ...state,
            qnh: {
                hPa: qnhHpa,
                inHg: calc.getInHgFromHpa(qnhHpa),
                mmHg: calc.getMmHgFromHpa(qnhHpa),
            },
            qfe: {
                hPa: qfeHpa,
                inHg: qfeInHg,
                mmHg: calc.getMmHgFromInHg(qfeInHg),
            },
        };
    },
    [QFE_FROM_MMHG]: (state, { payload }) => {
        qfeMmHg = payload;
        elevFt = state.elevation.ft;
        qfeHpa = calc.getHpaFromMmHg(qfeMmHg);
        qnhHpa = calc.getResultQnhHpa(qfeHpa, elevFt);
        return {
            ...state,
            qnh: {
                hPa: qnhHpa,
                inHg: calc.getInHgFromHpa(qnhHpa),
                mmHg: calc.getMmHgFromHpa(qnhHpa),
            },
            qfe: {
                hPa: qfeHpa,
                inHg: calc.getInHgFromMmHg(qfeMmHg),
                mmHg: qfeMmHg,
            },
        };
    },
    [RESET]: () => ({ ...initialState }),
    DEFAULT: (state) => state,
};

export default function rootReducer(state = initialState, action) {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}
