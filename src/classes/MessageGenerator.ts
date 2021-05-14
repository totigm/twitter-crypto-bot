import { config } from "../config";
import { Coin, Comparison, Decimals } from "../types";
import { formatDecimals } from "../utils";

class MessageGenerator {
    constructor(private coin: Coin, private decimals: Decimals) {}

    private _format(number, isPercentage = false) {
        const absoluteNumber = Math.abs(number);
        return formatDecimals(
            absoluteNumber,
            isPercentage ? 2 : this.decimals,
            true
        );
    }

    private _createComparisonMessage({ intro, change }: Comparison) {
        const formatted = {
            price: this._format(change.price),
            percent: this._format(change.percent, true),
        };
        return `${change.price > 0 ? "🟢" : "🔴"} ${intro} the price has ${
            change.price > 0 ? "increased" : "dropped"
        } by $${formatted.price} (${formatted.percent}%).\n`;
    }

    private _getHashtags() {
        return `#${this.coin.name} #${this.coin.symbol}`;
    }

    private _getComparisonsMessages(comparisons: Comparison[]) {
        let message = "";
        comparisons.forEach(
            (comparison) =>
                (message += this._createComparisonMessage(comparison))
        );
        return message;
    }

    public createMessage(price: number, comparisons: Comparison[]): string {
        const formattedPrice = this._format(price);

        let message = `The $${this.coin.symbol} price is at $${formattedPrice} right now.\n`;
        message += this._getComparisonsMessages(comparisons);
        message += `\n${this._getHashtags()}`;

        if (config.node_env === "dev")
            message = message.replaceAll(/\$|#/g, (symbol) => `[${symbol}]`);

        return message;
    }
}

export default MessageGenerator;
