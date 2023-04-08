import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import { v4 as uuidv4 } from 'uuid';

const PriceListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-right: 6px;
  margin: 0;
  width: 100%;
  height: 50vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 100px;
    background: ${(props) => props.theme.bgAlphaColor};
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.accentColor};
    border-radius: 100px;
  }
`;
const PriceList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px 10px;
  width: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.theme.bgAlphaColor};
  color: ${(props) => props.theme.textColor};
`;
const PriceText = styled.p`
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  font-size: 18px;
  font-weight: 500;
`;
const PriceDateInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 500;
`;
const PriceDate = styled.span``;

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

function Price({ coinId }: chartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  const sortedData = data?.sort((a, b) => b.time_close - a.time_close);

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <section>
          <PriceListWrapper>
            {sortedData?.map((price) => (
              <PriceList key={uuidv4()}>
                <PriceText>${parseFloat(price.close).toFixed(2)}</PriceText>
                <PriceDateInfoContainer>
                  <PriceDate>
                    Date:{' '}
                    {`${new Date(price.time_close * 1000).toDateString().slice(8, 10)} ${new Date(
                      price.time_close * 1000
                    )
                      .toDateString()
                      .slice(4, 7)}`}
                  </PriceDate>
                </PriceDateInfoContainer>
              </PriceList>
            ))}
          </PriceListWrapper>
        </section>
      )}
    </div>
  );
}

export default Price;
