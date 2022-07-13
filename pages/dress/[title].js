import classNames from "classnames";
import Head from "next/head";
import Dress from "../../components/Dress";
import { useRouter } from 'next/router'
import data from "/Users/lissa/dev/regal/dress-data.json";


export default function DressPage() {
  const router = useRouter();
  const { title } = router.query;
  // let dress = data.filter((dress) => dress.id === id)[0];

  // console.log(dress);

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
          "flex flex-col py-2  bg-purple-200/40 items-center",
          "md:px-4 md:p-9 md:px-12"
        )}
      >
        <Dress title={title} />
      </main>
    </>
  );
}
