import { Comparison, HasComparisons } from '../types';
import { getChange } from '../utils';

class ComparisonsGenerator {
    private lastTweetPrice: number;

    constructor(private hasComparisons: HasComparisons) {}

    private static addComparison(comparisonsList: Comparison[], comparison: Comparison) {
        if (comparison.change.price !== 0) comparisonsList.push(comparison);
    }

    public getComparisons(price: number, previousPrice: number): Comparison[] {
        const comparisons: Comparison[] = [];
        const { hasComparisons } = this;

        if (this.lastTweetPrice && hasComparisons.lastTweet) {
            ComparisonsGenerator.addComparison(comparisons, {
                intro: 'Compared to the last tweet,',
                change: getChange(price, this.lastTweetPrice),
            });
        }

        if (hasComparisons.lastDay) {
            ComparisonsGenerator.addComparison(comparisons, {
                intro: 'In the last 24 hours',
                change: getChange(price, previousPrice),
            });
        }

        return comparisons;
    }

    public setLastTweetPrice(price: number) {
        this.lastTweetPrice = price;
    }
}

export default ComparisonsGenerator;
