import classNames from "classnames";
import Head from "next/head";
import List from "../components/List";

export default function Home() {
  return (
    <>
      <Head>
        <title>Regal Dresses</title>
        <meta
          name="description"
          content="fictional dress distributor website"
        />
      </Head>

      <main
        className={classNames(
          "flex flex-col py-2  items-center justify-center",
          "md:px-4"
        )}
      >
        <List />
      </main>
    </>
  );
}
