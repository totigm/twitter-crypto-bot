export interface PriceData {
  price: number;
  previousPrice: number;
}

export interface PriceChange {
  price: number;
  percent: number;
}

export interface Comparison {
  intro: string;
  change: PriceChange;
}
