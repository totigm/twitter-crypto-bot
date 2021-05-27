import { Decimals } from '../types';

const getCamelCase = (text: string): string =>
    text
        .match(/[a-zA-Z]+/g)
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join('');

const formatType = (object: any, type: string, keys: string[]) =>
    typeof object === type
        ? keys.reduce((objects, key) => ({ ...objects, [key]: object }), {})
        : object;

const formatDecimals = (number: number, decimals: Decimals, useGrouping = false): string => {
    const newDecimals =
        typeof decimals === 'number'
            ? {
                  min: decimals,
                  max: decimals,
              }
            : decimals;

    const options = {
        minimumFractionDigits: newDecimals.min,
        maximumFractionDigits: newDecimals.max,
        useGrouping,
    };

    return new Intl.NumberFormat('en-US', options).format(number);
};

const formatObject = (object: Object, callback: (value: any) => any): Object => {
    const obj = {};

    Object.entries(object).forEach(([key, value]) => {
        if (typeof value !== 'object') obj[key] = callback(value);
        else obj[key] = formatObject(object[key], callback);
    });

    return obj;
};

export { formatDecimals, formatObject, formatType, getCamelCase };
