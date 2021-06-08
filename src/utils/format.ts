import { Decimals } from '../types';

const getCamelCase = (text: string): string =>
    text
        .match(/[a-zA-Z]+/g)
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join('');

/* 
Every element that matches the given type will be updated to an object with
the keys from the array provided, with that same value in every property.
E.g. formatType({ example: true }, "boolean", ["formatted", "worked"]) will return
{
    example: {
        formatted: true,
        worked: true
    }
}
*/
const formatType = (object: any, type: string, keys: string[]) =>
    typeof object === type
        ? keys.reduce((objects, key) => ({ ...objects, [key]: object }), {})
        : object;

const formatDecimals = (number: number, { min, max }: Decimals, useGrouping = false): string => {
    const options = {
        minimumFractionDigits: min,
        maximumFractionDigits: max,
        useGrouping,
    };

    return new Intl.NumberFormat('en-US', options).format(number);
};

// Applies the callback function to every element that is not an object, no matter how nested it is.
const formatObject = (
    object: Object,
    callback: (value: any, keys?: string[]) => any,
    parentKeys: string[] = [],
): Object =>
    Object.entries(object).reduce((obj, [key, value]) => {
        const keys = [...parentKeys, key];
        return {
            ...obj,
            [key]:
                typeof value !== 'object'
                    ? callback(value, keys)
                    : formatObject(object[key], callback, keys),
        };
    }, {});

export { formatDecimals, formatObject, formatType, getCamelCase };
