import {
  createMuiTheme,
  CssBaseline,
  PaletteType,
  ThemeProvider,
} from "@material-ui/core";
import { NextPage } from "next";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useEffect, useState } from "react";
import { NoScript } from "../components/no-script/no-script";
import { ProgressBar } from "../components/progress-bar";
import "../styles/globals.css";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<PaletteType>("light");

  useEffect(() => {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const update = (matches: boolean) => {
      setTheme(matches ? "dark" : "light");
    };

    const listener = (event: MediaQueryListEvent) => {
      update(event.matches);
    };

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", listener);
    update(matchMedia.matches);

    return () => {
      matchMedia.removeEventListener("change", listener);
    };
  }, []);

  return (
    <>
      <ThemeProvider
        theme={createMuiTheme({
          palette: { type: theme },
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
