import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { NextPage } from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { NoScript } from "../components/no-script/no-script";
import { ProgressBar } from "../components/progress-bar";
import "../styles/globals.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider
        theme={createMuiTheme({
          palette: { type: "dark" },
        })}
      >
        <NoScript />
        <CssBaseline>
          <ProgressBar />
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
};
export default MyApp;
