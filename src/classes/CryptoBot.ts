import CryptoData from "./CryptoData";
import MessageGenerator from "./MessageGenerator";
import TwitterBot from "./TwitterBot";
import { Credentials, Coin, Decimals, Comparison } from "../types";
import { getChange, minutesToMs } from "../utils";

class CryptoBot {
    private _twitterBot: TwitterBot;
    private _cryptoData: CryptoData;
    private _messageGenerator: MessageGenerator;
    private _lastTweetPrice;

    constructor(
        { name, symbol }: Coin,
        credentials: Credentials,
        decimals: Decimals = { min: 0, max: 8 }
    ) {
        const coin = {
            name,
            symbol: symbol.toUpperCase(),
        };

        this._twitterBot = new TwitterBot(credentials);
        this._cryptoData = new CryptoData(coin.symbol, decimals);
        this._messageGenerator = new MessageGenerator(coin, decimals);
    }

    private _addComparison(
        comparisonsList: Comparison[],
        comparison: Comparison
    ) {
        if (comparison.change.price !== 0) comparisonsList.push(comparison);
    }

    private _getComparisons(
        price: number,
        previousPrice: number
    ): Comparison[] {
        const comparisons: Comparison[] = [];

        if (this._lastTweetPrice) {
            this._addComparison(comparisons, {
                intro: "Compared to the last tweet,",
                change: getChange(price, this._lastTweetPrice),
            });
        }

        this._addComparison(comparisons, {
            intro: "In the last 24 hours",
            change: getChange(price, previousPrice),
        });

        return comparisons;
    }

    public async tweet() {
        const { price, previousPrice } =
            await this._cryptoData.get24HrPriceData();

        const comparisons = this._getComparisons(price, previousPrice);

        const message = this._messageGenerator.createMessage(
            price,
            comparisons
        );

        this._twitterBot.tweet(message).then(({ data }: any) => {
            this._lastTweetPrice = price;
            console.log("Tweeted at", data.created_at);
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
