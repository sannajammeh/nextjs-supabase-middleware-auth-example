import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";

interface Props extends AppProps {
  Component: NextPage & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
