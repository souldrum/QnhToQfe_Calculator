//pressure

const K = (value) => (value >= 1000 ? 27.5 : 27.3);

export const getInHgFromHpa = (press) => {
    const inHg = Math.ceil((press / 33.864) * 100);
    return inHg;
};

export const getMmHgFromHpa = (press) => {
    const mmHg = Math.round(press / 1.333);
    return mmHg;
};

export const getHpaFromInHg = (press) => {
    const hPa = Math.round(press * 33.864 * 0.01);
    return hPa;
};

export const getMmHgFromInHg = (press) => {
    const mmHg = Math.round(press * 25.4 * 0.01);
    return mmHg;
};

export const getHpaFromMmHg = (press) => {
    const hPa = Math.round(press * 1.333);
    return hPa;
};

export const getInHgFromMmHg = (press) => {
    const InHg = Math.floor((press / 25.4) * 100);
    return InHg;
};

//elevation

export const getMetersFromFeet = (elev) => {
    const m = Math.round(elev * 0.3048);
    return m;
};

export const getFeetFromMeters = (elev) => {
    const ft = Math.round(elev * 3.28084);
    return ft;
};

//result

export const getResultQfeHpa = (press, elev) => {
    const qfeHpa = Math.round(press - elev / K(elev));
    return qfeHpa;
};

export const getResultQnhHpa = (press, elev) => {
    const qnhHpa = Math.round(+press + +(elev / K(elev)));
    return qnhHpa;
};
