import "../styles/global.style.ts";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global.style";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import store from "../store/store";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
