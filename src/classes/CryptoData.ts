import axios from 'axios';
import { Decimals, PriceData, Code, ChartOptions } from '../types';
import { formatDecimals, formatObject } from '../utils';
import config from '../config';

export default class CryptoData {
    constructor(
        private code: Code,
        private decimals: Decimals,
        private chartOptions: ChartOptions,
    ) {}

    public async get24HrPriceData(): Promise<PriceData> {
        const params = {
            symbol: `${this.code}USDT`,
        };

        const { lastPrice: price, prevClosePrice: previousPrice } = await axios({
            method: 'GET',
            url: `${config.binance_api}/ticker/24hr`,
            params,
        })
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

    public async getImageUrl(lastCandlePrice?: number): Promise<string> {
        const params = {
            lastPrice: lastCandlePrice,
            symbol: `${this.code}USDT`,
            ...this.chartOptions,
        };

        const { chartImage } = await axios({
            method: 'GET',
            url: `${config.charts_api}/binance`,
            headers: {
                'x-rapidapi-key': config.rapidapi_key,
            },
            params,
        })
            .then((res) => res.data)
            .catch(() => '');

        return chartImage as string;
    }
}
