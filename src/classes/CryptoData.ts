import axios from "axios";
import { Decimals, PriceData, CryptoDataParams } from "../types";
import { formatDecimals, formatObject } from "../utils";

export default class CryptoData {
    private symbol: string;
    private decimals: Decimals;

    constructor({ symbol, decimals = { min: 0, max: 8 } }: CryptoDataParams) {
        this.symbol = symbol.toUpperCase();
        this.decimals = decimals;
    }

    public async get24HrPriceData(): Promise<PriceData> {
        const { lastPrice: price, prevClosePrice: previousPrice } = await axios
            .get(
                `https://api.binance.com/api/v3/ticker/24hr?symbol=${this.symbol}USDT`
            )
            .then((res) => res.data);

        const priceData = {
            price,
            previousPrice,
        };

        return formatObject(priceData, (value) =>
            Number(formatDecimals(value, this.decimals))
        ) as PriceData;
    }
}
