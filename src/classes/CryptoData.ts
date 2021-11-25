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
        try {
            const { lastPrice: price, prevClosePrice: previousPrice } = await axios
                .get(`${config.binance_api}/ticker/24hr?symbol=${this.code}USDT`)
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

    public async getImageUrl(lastPrice?: number): Promise<string> {
        try {
            let query = `symbol=${this.code}USDT&interval=${this.chartOptions.interval}&limit=${this.chartOptions.limit}`;
            if (lastPrice) {
                query += `&lastPrice=${lastPrice}`;
            }

            const { chartImage } = await axios
                .get(`${config.charts_api}/chart/binance?${query}`)
                .then((res) => res.data);
            return chartImage as string;
        } catch (error) {
            return '';
        }
    }
}
