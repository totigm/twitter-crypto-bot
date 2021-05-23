import { Coin } from './coins';
import { Credentials } from './credentials';
import { Decimals } from './format';

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
