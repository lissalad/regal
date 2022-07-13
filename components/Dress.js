import classNames from "classnames";
import Image from "next/image";
import data from "/Users/lissa/dev/regal/dress-data.json";

function Dress({ title }) {
  let dress = data.filter((dress) => dress.title === title)[0];

  return (
    <div className={classNames("flex flex-col p-2 items-center", "md:flex-row md:p-9")}>
      {/* image */}
      <div className={classNames("w-[300px]", "md:w-[500px]")}>
        <Image
          src={"/images/" + dress.img}
          alt="dress"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>

      {/* info */}
      <div className={classNames("flex flex-col  items-center londinia", "md:mx-12")}>
        <div
          className={classNames(
            "flex flex-col justify-between mx-2 mt-4 items-center"
          )}
        >
          <p className={classNames("text-4xl m-3 costa", "md:mb-5")}>{dress.title}</p>
          <p className={classNames("text-md")}>${dress.price}</p>

          {/* size */}
          <div className={classNames("flex flex-row space-x-2 py-4")}>
            <p className="text-lg">size</p>
            <select
              className="border-[1px] border-black/40 rounded-sm"
              name="size"
              id="size"
            >
              <option value="xs">extra small</option>
              <option value="sm">small</option>
              <option value="md" defaultValue>
                medium
              </option>
              <option value="lg">large</option>
              <option value="xl">extra large</option>
            </select>
          </div>

          {/* materials and shipping */}
          <div className="md:py-9 py-2 text-black/80 text-sm text-center">
            <p>shipping: </p>
            <p>materials: </p>
          </div>
        </div>

        {/* button */}
        <button
          className={classNames(
            "bg-rose-500 text-white fixed left-0 bottom-0 w-full py-4 text-xl",
            "md:relative md:px-12 md:py-2 md:my-3 md:w-fit md:h-fit md:rounded-sm md:border-[3px]"
          )}
        >
          purchase
        </button>
      </div>
    </div>
  );
}

export default Dress;
