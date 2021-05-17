import axios from "axios";
import { Decimals, PriceData } from "../types";
import { formatDecimals, formatObject } from "../utils";

export default class CryptoData {
  private symbol: string;

  constructor(
    symbol: string,
    private decimals: Decimals = { min: 0, max: 8 }
  ) {
    this.symbol = symbol.toUpperCase();
  }

  public async get24HrPriceData(): Promise<PriceData> {
    const { lastPrice: price, prevClosePrice: previousPrice } = await axios
      .get(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${this.symbol}USDT`
      )
      .then((res) => res.data);

    const priceData = {
      price,
      previousPrice,
    };

    return formatObject(priceData, (value) => Number(formatDecimals(value, this.decimals))) as PriceData;
  }
}
