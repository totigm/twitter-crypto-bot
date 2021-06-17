import axios from 'axios';
import { Decimals, PriceData, Symbol } from '../types';
import { formatDecimals, formatObject } from '../utils';

export default class CryptoData {
    constructor(private symbol: Symbol, private decimals: Decimals = { min: 0, max: 8 }) {}

    public async get24HrPriceData(): Promise<PriceData> {
        const { lastPrice: price, prevClosePrice: previousPrice } = await axios
            .get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${this.symbol}USDT`)
            .then((res) => res.data)
            .catch((error) => console.error(error));

        const priceData: PriceData = {
            price,
            previousPrice,
        };

        return formatObject(priceData, (value) =>
            Number(formatDecimals(value, this.decimals)),
        ) as PriceData;
    }
}
