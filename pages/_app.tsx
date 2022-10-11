import "../styles/global.style.ts";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global.style";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <Provider store={store}>
      {/*  <PersistGate loading={null} persistor={persistor}></PersistGate> */}
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
