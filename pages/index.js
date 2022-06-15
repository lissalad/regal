import classNames from "classnames";
import Head from "next/head";
import DressList from "../components/DressList";

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
        // className={classNames(
        //   "flex flex-col py-2 text-rose-700 bg-purple-200/40 items-center",
        //   "md:px-4"
        // )}
      >
        <DressList />
      </main>
    </>
  );
}
