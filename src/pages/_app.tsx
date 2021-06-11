import { NextPage } from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ProgressBar } from "../components/progress-bar";
import "../styles/globals.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
