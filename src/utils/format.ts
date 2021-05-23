import { Decimals } from "../types";

const formatDecimals = (number: number, decimals: Decimals, useGrouping = false): string => {
    if (typeof decimals === "number")
        decimals = {
            min: decimals,
            max: decimals,
        };

    const options = {
        minimumFractionDigits: decimals.min,
        maximumFractionDigits: decimals.max,
        useGrouping,
    };

    return new Intl.NumberFormat("en-US", options).format(number);
};

const formatObject = (
    object: Object,
    callback: (value: any) => any
): Object => {
    const obj = {};

    Object.entries(object).forEach(([key, value]) => {
        if (typeof value !== "object") obj[key] = callback(value);
        else obj[key] = formatObject(object[key], callback);
    });

    return obj;
};

export { formatDecimals, formatObject };
