import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import data from "/Users/lissa/dev/regal/dress-data.json";

function Item({ title, id }) {
  // get dress with given title (first in list, hopefully only)
  let dress = data.filter((dress) => dress.title === title)[0];
  console.log(id);

  return (
    <Link href={"/dress/" + title}>
      <div
        className={classNames(
          "relative group flex justify-center m-3",
          "md:m-8"
        )}
      >
        <div className={classNames("w-[300px] rounded-sm", "md:w-[400px]")}>
          <Image
            src={"/images/" + dress.img}
            alt={dress.title}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div
          className={classNames(
            "w-full absolute bg-black/20 backdrop-blur py-2 bottom-0 text-center transition-all duration-300 text-white/90 londinia",
            "md:opacity-0 md:group-hover:opacity-100 md:py-3"
          )}
        >
          <p className="text-lg">{dress.title}</p>
          <p className="hidden text-xs py-1">${dress.price}</p>
        </div>
      </div>
    </Link>
  );
}
export default Item;
