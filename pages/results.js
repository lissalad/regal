import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Gallery from "../components/Gallery";
import Picture from "../components/Picture";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Regal Dresses | Floral</title>
        <meta
          name="description"
          content="fictional dress distributor website"
        />
      </Head>

      <main
        className={classNames(
          "flex flex-col py-2 text-rose-700 bg-purple-200/40 items-center",
          "md:px-4"
        )}
      >
        <section className="flex flex-col w-fit">
          <p className="text-3xl text-black p-5 text-center">Floral Dresses</p>
          <Gallery color="green"/>
        </section>
      </main>
    </>
  );
}
