const BASE_URL = 'https://api.coinpaprika.com/v1';
const CUSTOM_URL = 'https://ohlcv-api.nomadcoders.workers.dev/?coinId=';

export function fetchCoins(): Promise<any> {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(id: string): Promise<any> {
  return fetch(`${BASE_URL}/coins/${id}`).then((response) => response.json());
}

export function fetchCoinTickers(id: string): Promise<any> {
  return fetch(`${BASE_URL}/tickers/${id}`).then((response) => response.json());
}

export function fetchCoinHistory(id: string): Promise<any> {
  return fetch(`${CUSTOM_URL}${id}`).then((response) => response.json());
}
