import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Picture from "../components/Picture";
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

        {/* <ImageIcon title="Blue" text="blue" /> */}

        {/* banner */}
        {/* <section className="flex flex-col w-fit">
          <p className="text-3xl text-black p-5 text-center">YOU are regal</p>
          <div className={classNames("flex flex-row w-fit flex-wrap")}>
            <Picture
              title="Royal Green Sequins"
              classes="w-[100vw] hidden md:w-[30vw] md:block"
            />
            <Picture
              title="Yellow Southern Victorian"
              classes="w-[100vw] hidden md:w-[30vw] md:block"
            />
            <Picture title="Strapless Red" classes="w-[100vw] md:w-[30vw]" />
          </div>
        </section> */}

        <ByColor />
      </main>
    </>
  );
}
