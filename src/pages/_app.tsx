import { AppProps } from "next/dist/next-server/lib/router/router";
import { FC } from "react";
import { ProgressBar } from "../components/progress-bar";
import "../styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
