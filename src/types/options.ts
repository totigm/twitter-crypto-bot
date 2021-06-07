import { Credentials } from './credentials';

export interface ParamsOptions {
    credentials?: Credentials;
    decimalsAmount?: number;
    hasHashtags?: boolean | HasHashtags;
    hasComparisons?: boolean | HasComparisons;
}

export interface Options {
    credentials?: Credentials;
    decimalsAmount?: Decimals;
    hasHashtags?: HasHashtags;
    hasComparisons?: HasComparisons;
}

export interface HasHashtags {
    symbol?: boolean;
    name?: boolean;
}

export interface HasComparisons {
    lastTweet?: boolean;
    lastDay?: boolean;
}

export interface Decimals {
    min: number;
    max: number;
}
