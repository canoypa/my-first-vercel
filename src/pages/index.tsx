import { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "../components/navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home</h1>

        <Navigation />
      </main>
    </>
  );
};
export default Home;
