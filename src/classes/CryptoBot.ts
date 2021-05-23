import CryptoData from './CryptoData';
import MessageGenerator from './MessageGenerator';
import TwitterBot from './TwitterBot';
import { Comparison, CryptoBotParams } from '../types';
import { getChange, minutesToMs } from '../utils';

class CryptoBot {
    private twitterBot: TwitterBot;
    private cryptoData: CryptoData;
    private messageGenerator: MessageGenerator;
    private lastTweetPrice;

    constructor({ coin: { name, symbol }, credentials, decimals = { min: 0, max: 8 } }: CryptoBotParams) {
        const coin = {
            name,
            symbol: symbol.toUpperCase(),
        };

        this.twitterBot = new TwitterBot(credentials);
        this.cryptoData = new CryptoData(coin.symbol, decimals);
        this.messageGenerator = new MessageGenerator(coin, decimals);
    }

    private static addComparison(comparisonsList: Comparison[], comparison: Comparison) {
        if (comparison.change.price !== 0) comparisonsList.push(comparison);
    }

    private getComparisons(price: number, previousPrice: number): Comparison[] {
        const comparisons: Comparison[] = [];

        if (this.lastTweetPrice) {
            CryptoBot.addComparison(comparisons, {
                intro: 'Compared to the last tweet,',
                change: getChange(price, this.lastTweetPrice),
            });
        }

        CryptoBot.addComparison(comparisons, {
            intro: 'In the last 24 hours',
            change: getChange(price, previousPrice),
        });

        return comparisons;
    }
    public async tweet() {
        const { price, previousPrice } = await this.cryptoData.get24HrPriceData();

        const comparisons = this.getComparisons(price, previousPrice);

        const message = this.messageGenerator.createMessage(price, comparisons);

        this.twitterBot.tweet(message).then(({ data }: any) => {
            this.lastTweetPrice = price;
            console.log('Tweeted at', data.created_at);
        });
    }

    public scheduleTweets(minutes) {
        this.tweet();

        const ms = minutesToMs(minutes);
        setInterval(() => {
            this.tweet();
        }, ms);
    }
}

export default CryptoBot;
