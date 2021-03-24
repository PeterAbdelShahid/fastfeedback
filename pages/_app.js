import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import customTheme from '@/styles/theme';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <AuthProvider>
        <ColorModeProvider
          options={{
            initialColorMode: 'light',
            useSystemColorMode: false
          }}
        >
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
