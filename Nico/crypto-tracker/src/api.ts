import { ICoin } from './routes/Coins';
// export async function fetchCoins() {
//   const response = await fetch('https://api.coinpaprika.com/v1/coins');
//   const json = await response.json();
//   return json;
// }

// To make above code, more simplify.
export function fetchCoins(): Promise<ICoin[]> {
  return fetch('https://api.coinpaprika.com/v3/coins').then((response) => response.json());
}
