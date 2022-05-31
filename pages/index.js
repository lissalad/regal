import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Picture from "../components/Picture";
import styles from "../styles/Home.module.css";

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
        {/* banner */}
        {/* <section className="flex flex-col w-fit">
          <p className="text-3xl text-black p-5 text-center">YOU are regal</p>
          <div className={classNames("flex flex-row w-fit flex-wrap")}>
            <Picture
              title="green sequin"
              width="w-[100vw] hidden md:w-[30vw] md:block"
            />
            <Picture
              title="yellow victorian"
              width="w-[100vw] hidden md:w-[30vw] md:block"
            />
            <Picture title="strapless red" width="w-[100vw] md:w-[30vw]" />
          </div>
        </section> */}

        {/* shop by color */}
        <section>
          <p className="text-3xl text-black p-5 text-center">shop by color</p>
          <Link pass href="/results" color="red">
            <Picture title="Strapless Red" />
          </Link>
        </section>
      </main>
    </>
  );
}
