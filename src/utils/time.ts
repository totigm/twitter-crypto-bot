import { Time } from 'src/types';

const secondsToMs = (seconds: number) => seconds * 1000;
const minutesToMs = (minutes: number) => secondsToMs(minutes * 60);
const hoursToMs = (hours: number) => minutesToMs(hours * 60);

const timeFormatter = {
    seconds: secondsToMs,
    minutes: minutesToMs,
    hours: hoursToMs,
};

const timeToMs = (time: Time) =>
    Object.entries(time).reduce((ms, [key, value]) => ms + timeFormatter[key](value), 0);

export { minutesToMs, timeToMs };
