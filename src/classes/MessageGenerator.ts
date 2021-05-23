import Config from '../config';

import { Coin, Comparison, Decimals, MessageGeneratorParams } from '../types';
import { formatDecimals } from '../utils';

class MessageGenerator {
    private coin: Coin;
    private decimals: Decimals;

    constructor({ coin, decimals = { min: 0, max: 8 } }: MessageGeneratorParams) {
        this.coin = coin;
        this.decimals = decimals;
    }

    private format(number, isPercentage = false) {
        const absoluteNumber = Math.abs(number);
        return formatDecimals(absoluteNumber, isPercentage ? 2 : this.decimals, true);
    }

    private createComparisonMessage({ intro, change }: Comparison) {
        const formatted = {
            price: this.format(change.price),
            percent: this.format(change.percent, true),
        };
        return `${change.price > 0 ? '🟢' : '🔴'} ${intro} the price has ${
            change.price > 0 ? 'increased' : 'dropped'
        } by $${formatted.price} (${formatted.percent}%).\n`;
    }

    private getHashtags() {
        return `#${this.coin.name} #${this.coin.symbol}`;
    }

    private getComparisonsMessages(comparisons: Comparison[]) {
        let message = '';
        comparisons.forEach((comparison) => {
            message += this.createComparisonMessage(comparison);
        });
        return message;
    }

    public createMessage(price: number, comparisons: Comparison[]): string {
        const formattedPrice = this.format(price);

        let message = `The $${this.coin.symbol} price is at $${formattedPrice} right now.\n`;
        message += this.getComparisonsMessages(comparisons);
        message += `\n${this.getHashtags()}`;

        if (Config.node_env === 'dev') {
            message = message.replaceAll(/\$|#/g, (symbol) => `[${symbol}]`);
        }

        return message;
    }
}

export default MessageGenerator;
