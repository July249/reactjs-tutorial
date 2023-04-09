import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';

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
  background-color: ${(props) => props.theme.bgAlphaColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  transition: background-color 0.4s ease-in;
  border: 2px solid ${(props) => props.theme.textColor};
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    background-color: #f5f5f5;
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

interface ICoinsProps {}

function Coins({}: ICoinsProps) {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setPos(window.pageYOffset);
  };

  const storedPos = sessionStorage.getItem('pos');

  useEffect(() => {
    if (storedPos) {
      window.scrollTo(0, parseInt(storedPos));
    }
  }, [storedPos]);

  const handleStorePosY = () => {
    sessionStorage.setItem('pos', window.pageYOffset.toString());
  };

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
          <button type='button' onClick={toggleDarkAtom}>
            Toggle Dark Mode
          </button>
        </Header>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 50).map((coin) => (
              <Coin key={coin.id} onClick={handleStorePosY}>
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
