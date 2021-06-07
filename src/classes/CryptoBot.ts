import CryptoData from './CryptoData';
import MessageGenerator from './MessageGenerator';
import TwitterBot from './TwitterBot';
import { Coin, ParamsOptions, Currencies, Symbol, Name, Time } from '../types';
import { minutesToMs, getCamelCase, timeToMs } from '../utils';
import ComparisonsGenerator from './ComparisonsGenerator';
import OptionsFormatter from './OptionsFormatter';

export default class CryptoBot {
    private twitterBot: TwitterBot;
    private cryptoData: CryptoData;
    private messageGenerator: MessageGenerator;
    private comparisonGenerator: ComparisonsGenerator;

    constructor(symbol: Symbol, botOptions?: ParamsOptions) {
        const coin: Coin = {
            symbol,
            name: getCamelCase(Currencies[symbol]) as Name,
        };

        const options = OptionsFormatter.getOptions(botOptions);

        this.twitterBot = new TwitterBot(options.credentials);

        this.cryptoData = new CryptoData(coin.symbol, options.decimalsAmount);

        this.comparisonGenerator = new ComparisonsGenerator(options.hasComparisons);

        this.messageGenerator = new MessageGenerator(coin, options);
    }

    public async tweet() {
        const { price, previousPrice } = await this.cryptoData.get24HrPriceData();

        const comparisons = this.comparisonGenerator.getComparisons(price, previousPrice);

        const message = this.messageGenerator.createMessage(price, comparisons);

        this.twitterBot
            .tweet(message)
            .then(() => {
                this.comparisonGenerator.setLastTweetPrice(price);
                console.log(`Bot tweeted at $${price}`);
            })
            .catch((error) => console.error(error));
    }

    public scheduleTweets(time: number | Time) {
        this.tweet();

        const ms = typeof time === 'number' ? minutesToMs(time) : timeToMs(time);
        setInterval(() => {
            this.tweet();
        }, ms);
    }
}
