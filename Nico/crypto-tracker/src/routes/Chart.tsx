import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
// Recoil Settings
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';

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
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  if (!data) return null;
  console.log(data);

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <ApexChart
          type='candlestick'
          series={[
            {
              data:
                (data.map((price) => ({
                  x: new Date(price.time_close * 1000),
                  y: [
                    parseFloat(price.open),
                    parseFloat(price.high),
                    parseFloat(price.low),
                    parseFloat(price.close),
                  ],
                })) as []) || null,
            },
          ]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
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
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#0be881',
                  downward: '#ff3f34',
                },
              },
            },
            tooltip: {
              x: {
                format: 'dd MMM yyyy',
              },
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
