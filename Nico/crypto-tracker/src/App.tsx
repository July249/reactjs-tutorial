import { Helmet, HelmetProvider } from 'react-helmet-async';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap'
            rel='stylesheet'
          />
        </Helmet>
      </HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
