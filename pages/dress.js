import classNames from "classnames";
import Head from "next/head";
import Dress from "../components/Dress";

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
          "flex flex-col py-2 bg-purple-200/40 items-center",
          "md:px-4 md:items-start"
        )}
      >
        <Dress image="blue.jpeg"/>

      </main>
    </>
  );
}
