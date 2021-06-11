import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>User</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>User: {query.name}</h1>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/user?name=Sasa">User</Link>
          </li>
        </ul>
      </main>
    </>
  );
}