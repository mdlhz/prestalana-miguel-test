import type { AppProps } from "next/app";
import { store } from '../store';
import { Provider } from 'react-redux'
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
