import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Gallery from "./Gallery";
import Picture from "./Picture";
import styles from "../styles/Home.module.css";

function List({ color }) {
  return (

      <div
        className={classNames(
          "flex flex-col py-2 text-rose-700 bg-purple-200/40 items-center",
          "md:px-4"
        )}
      >
          <p className="text-3xl text-black p-5 text-center">{color} dresses</p>
          <Gallery color={color}/>
      </div>
  );
}

export default List;
