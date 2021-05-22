import { Coin, Credentials, Decimals } from "./";

export interface CryptoBotParams {
    coin: Coin;
    credentials: Credentials;
    decimals: Decimals;
}

export interface MessageGeneratorParams {
    coin: Coin;
    decimals: Decimals;
}

export interface CryptoDataParams {
    symbol: string;
    decimals: Decimals;
}
