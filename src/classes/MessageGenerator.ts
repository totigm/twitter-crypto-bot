import config from '../config';
import { Coin, Comparison, MessageOptions } from '../types';
import { formatDecimals } from '../utils';

export default class MessageGenerator {
    constructor(private coin: Coin, private options: MessageOptions) {}

    private format(number, isPercentage = false) {
        const absoluteNumber = Math.abs(number);
        return formatDecimals(
            absoluteNumber,
            isPercentage ? { max: 2, min: 2 } : this.options.decimalsAmount,
            true,
        );
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
        const { name, symbol } = this.coin;
        const { hasHashtags } = this.options;

        let hashtags = '';
        if (hasHashtags.symbol) hashtags += `#${symbol} `;
        if (hasHashtags.name && name !== symbol) hashtags += `#${name}`;
        return hashtags;
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

        if (config.node_env === 'dev')
            message = message.replaceAll(/\$|#/g, (symbol) => `[${symbol}]`);

        return message;
    }
}
