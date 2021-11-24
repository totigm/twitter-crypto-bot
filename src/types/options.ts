import { Credentials } from './credentials';

export interface ParamsOptions {
    credentials?: Partial<Credentials>;
    decimalsAmount?: number;
    hasHashtags?: boolean | Partial<HasHashtags>;
    hasComparisons?: boolean | Partial<HasComparisons>;
}

export interface Options {
    credentials: Credentials;
    decimalsAmount: Decimals;
    hasHashtags: HasHashtags;
    hasComparisons: HasComparisons;
}

export interface HasHashtags {
    code: boolean;
    name: boolean;
}

export interface HasComparisons {
    lastTweet: boolean;
    lastDay: boolean;
}

export interface Decimals {
    min: number;
    max: number;
}

export interface MessageOptions {
    hasHashtags: HasHashtags;
    decimalsAmount: Decimals;
}
