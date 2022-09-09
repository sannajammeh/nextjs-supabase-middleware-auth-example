import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import Header from "../components/header";
import { useInitAuth } from "context/auth";

interface Props extends AppProps {
  Component: NextPage & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
}

function MyApp({ Component, pageProps }: Props) {
  useInitAuth();
  return (
    <>
      <Header />
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
