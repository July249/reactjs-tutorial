import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [price, setPrice] = useState({});

  useEffect(() => {
    (async () => {
      // const response = await fetch('https://api.coingecko.com/api/v3/coins/' + coinId);
      // const json = await response.json();
      // short version of the above:
      const infoData = await (await fetch('https://api.coinpaprika.com/v1/coins/' + coinId)).json();
      const priceData = await (
        await fetch('https://api.coinpaprika.com/v1/tickers/' + coinId)
      ).json();

      setInfo(infoData);
      setPrice(priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : <></>}
    </Container>
  );
}

export default Coin;
