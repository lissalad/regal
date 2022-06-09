import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ByColor from "../components/ByColor";
import ImageIcon from "../components/ImageIcon";

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
          "flex flex-col py-2 text-rose-700 bg-purple-200/40 items-center",
          "md:px-4"
        )}
      >

        <ByColor />
      </main>
    </>
  );
}
