import axios from 'axios';
import { Decimals, PriceData, Code, ChartOptions } from '../types';
import { formatDecimals, formatObject } from '../utils';

export default class CryptoData {
    constructor(
        private code: Code,
        private decimals: Decimals,
        private chartOptions: ChartOptions,
    ) {}

    public async get24HrPriceData(): Promise<PriceData> {
        try {
            const { lastPrice: price, prevClosePrice: previousPrice } = await axios
                .get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${this.code}USDT`)
                .then((res) => res.data)
                .catch((error) => console.error(error));

            const priceData: PriceData = {
                price,
                previousPrice,
            };

            return formatObject(priceData, (value) =>
                Number(formatDecimals(value, this.decimals)),
            ) as PriceData;
        } catch (error) {
            throw new Error();
        }
    }

    public async getImageUrl(): Promise<string> {
        try {
            const { chartImage } = await axios
                .get(
                    `http://localhost:3000/chart/binance?symbol=${this.code}USDT&interval=${this.chartOptions.interval}&limit=${this.chartOptions.limit}`,
                )
                .then((res) => res.data);
            return chartImage as string;
        } catch (error) {
            return '';
        }
    }
}
