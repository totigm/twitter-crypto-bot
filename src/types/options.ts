import { Credentials } from './credentials';

export interface ParamsOptions {
    credentials?: Partial<Credentials>;
    decimalsAmount?: number;
    hasHashtags?: boolean | Partial<HasHashtags>;
    hasComparisons?: boolean | Partial<HasComparisons>;
    chartOptions?: Partial<ChartOptions>;
}

export interface Options {
    credentials: Credentials;
    decimalsAmount: Decimals;
    hasHashtags: HasHashtags;
    hasComparisons: HasComparisons;
    chartOptions: ChartOptions;
}

export interface HasHashtags {
    code: boolean;
    name: boolean;
}

export interface HasComparisons {
    lastTweet: boolean;
    lastDay: boolean;
}

export interface MessageOptions {
    hasHashtags: HasHashtags;
    decimalsAmount: Decimals;
}

export interface Decimals {
    min: number;
    max: number;
}

type Interval =
    | '1m'
    | '3m'
    | '5m'
    | '15m'
    | '30m'
    | '1h'
    | '2h'
    | '4h'
    | '6h'
    | '8h'
    | '12h'
    | '1d'
    | '3d'
    | '1w'
    | '1M';

export interface ChartOptions {
    interval: Interval;
    limit: number;
}
