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
        <div className={classNames("p-8 text-black/60", "md:p-12 md:m-12")}>
          <h1 className={classNames("costa text-5xl", "md:text-[50px]")}>fit for a queen</h1>
        </div>
        <List />
      </main>
    </>
  );
}
