import merge from 'deepmerge';
import { Options, ParamsOptions } from '../types';
import { formatType } from '../utils';
import config from '../config';

export default class OptionsFormatter {
    private static defaultOptions: Options = {
        credentials: {
            consumer_key: config.consumer_key,
            consumer_secret: config.consumer_secret,
            access_token: config.access_token,
            access_token_secret: config.access_token_secret,
        },
        decimalsAmount: { min: 0, max: 8 },
        hasHashtags: {
            name: true,
            symbol: true,
        },
        hasComparisons: {
            lastDay: true,
            lastTweet: true,
        },
    };

    private static paramsOptionsFormat = {
        decimalsAmount: 'number',
        hasComparisons: 'boolean',
        hasHashtags: 'boolean',
    };

    public static getOptions(paramsOptions: ParamsOptions): Options {
        const options = merge(this.defaultOptions, paramsOptions);

        const formattedOptions = Object.fromEntries(
            Object.entries(this.paramsOptionsFormat).map(([property, type]) => [
                property,
                formatType(options[property], type, Object.keys(this.defaultOptions[property])),
            ]),
        );

        return {
            ...options,
            ...formattedOptions,
        };
    }
}
