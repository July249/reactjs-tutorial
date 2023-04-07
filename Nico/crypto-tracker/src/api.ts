import { ICoin } from './routes/Coins';

const BASE_URL = 'https://api.coinpaprika.com/v3';

export function fetchCoins(): Promise<ICoin[]> {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(id: string): Promise<any> {
  return fetch(`${BASE_URL}/coins/${id}`).then((response) => response.json());
}

export function fetchCoinTickers(id: string): Promise<any> {
  return fetch(`${BASE_URL}/tickers/${id}`).then((response) => response.json());
}
