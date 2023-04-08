import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

interface chartProps {
  coinId: string;
}

interface IHistoricalData {
  market_cap: number;
  low: string;
  high: string;
  open: string;
  close: string;
  time_open: number;
  time_close: number;
  volume: string;
}

function Chart({ coinId }: chartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <ApexChart
          type='line'
          series={[
            {
              name: 'price',
              data: data?.map((price) => Number(price.close)) as number[],
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: { show: false },
            stroke: {
              curve: 'smooth',
              width: 4,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
            },
            yaxis: {
              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
