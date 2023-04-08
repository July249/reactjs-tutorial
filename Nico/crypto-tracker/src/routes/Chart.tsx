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
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
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
              type: 'datetime',
              categories: data?.map((price) => {
                const month = new Date(price.time_close * 1000).toDateString().slice(4, 7);
                const date = new Date(price.time_close * 1000).toDateString().slice(8, 10);
                return date + ' ' + month;
              }),
            },
            yaxis: {
              labels: {
                show: false,
              },
            },
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#0be881'],
                stops: [0, 100],
              },
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: (val: number) => `$${val.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
