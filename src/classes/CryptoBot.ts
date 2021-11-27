import CryptoData from './CryptoData';
import MessageGenerator from './MessageGenerator';
import TwitterBot from './TwitterBot';
import { Coin, ParamsOptions, Code, Name, Time } from '../types';
import { minutesToMs, timeToMs } from '../utils';
import ComparisonsGenerator from './ComparisonsGenerator';
import OptionsFormatter from './OptionsFormatter';
import { getCoin } from '../utils/coins';

export default class CryptoBot {
    private twitterBot: TwitterBot;
    private cryptoData: CryptoData;
    private messageGenerator: MessageGenerator;
    private comparisonGenerator: ComparisonsGenerator;

    constructor(coin: Name | Code, botOptions: ParamsOptions = {}) {
        const formattedCoin: Coin = getCoin(coin);

        const options = OptionsFormatter.getOptions(botOptions);

        this.twitterBot = new TwitterBot(options.credentials);

        this.cryptoData = new CryptoData(
            formattedCoin.code,
            options.decimalsAmount,
            options.chartOptions,
        );

        this.comparisonGenerator = new ComparisonsGenerator(options.hasComparisons);

        this.messageGenerator = new MessageGenerator(formattedCoin, {
            decimalsAmount: options.decimalsAmount,
            hasHashtags: options.hasHashtags,
        });
    }

    public async tweet() {
        const { price, previousPrice } = await this.cryptoData.get24HrPriceData();

        const chartImage = await this.cryptoData.getImageUrl(price);

        const comparisons = this.comparisonGenerator.getComparisons(price, previousPrice);

        const message = this.messageGenerator.createMessage(price, comparisons);

        this.twitterBot
            .tweet(message, chartImage)
            .then(() => {
                this.comparisonGenerator.setLastTweetPrice(price);
                console.log(`Bot tweeted at $${price}`);
            })
            .catch((error) => console.error(error));
    }

    public setTweetInterval(time: number | Time) {
        this.tweet();

        const ms = typeof time === 'number' ? minutesToMs(time) : timeToMs(time);
        setInterval(() => this.tweet(), ms);
    }
}
