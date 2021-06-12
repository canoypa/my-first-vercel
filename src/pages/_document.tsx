import { ServerStyleSheets } from "@material-ui/styles";
import Document from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    const sheets = new ServerStyleSheets();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </>
      ),
    };
  }
}
