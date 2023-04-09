import Router from './Router';
import reset from 'styled-reset';
import { useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleDark = () => setIsDark((prev) => !prev);
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
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router isDark={isDark} toggleDark={toggleDark} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
