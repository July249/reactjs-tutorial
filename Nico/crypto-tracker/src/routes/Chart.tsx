import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';

interface chartProps {
  coinId: string;
}

function Chart({ coinId }: chartProps) {
  const { isLoading, data } = useQuery(['ohlcv', coinId], () => fetchCoinHistory(coinId));
  console.log(data);

  return <h1>Chart</h1>;
}

export default Chart;
