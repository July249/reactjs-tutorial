import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: #fff;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Coin</title>
        </Helmet>
      </HelmetProvider>
      <Container>
        <Header>
          <Title>Coins</Title>
        </Header>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 50).map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                    alt={coin.name}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
    </>
  );
}

export default Coins;
