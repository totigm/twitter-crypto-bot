import { Name, Code, Coin, Currencies } from '../types/currencies';

/* 
Gets a Coin object from a Coin's name or code
E.g. getCoin('BTC') will return
{
    name: 'Bitcoin',
    code: 'BTC'
}
getCoin('Bitcoin') would return the same object
*/
export const getCoin = (coin: Name | Code): Coin =>
    coin in Currencies
        ? {
              name: Currencies[coin],
              code: coin as Code,
          }
        : {
              name: coin as Name,
              code: Object.entries(Currencies).find(([, name]) => coin === name)[0] as Code,
          };
