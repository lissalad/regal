import classNames from "classnames";
import Image from "next/image";
import data from "/Users/lissa/dev/regal/dress-data.json";

function Dress({ image }) {
  return (
    <div className={classNames("flex flex-col p-4", "md:flex-row md:p-9")}>
      {/* image */}
      <div className={classNames("w-[300px]", "md:w-[400px]")}>
        <Image
          src={"/images/" + image}
          alt="dress"
          width="100%"
          height="100%"
          layout="responsive"
          // objectFit="contain"
        />
      </div>

      {/* info */}
      <div className={classNames("flex flex-col mx-12 items-center")}>
        <div
          className={classNames(
            "flex flex-col justify-between mx-2 mt-4 items-center space-y-1"
          )}
        >
          <p className={classNames("text-2xl")}>Pretty Blue Princess</p>
          <p className={classNames("text-sm")}>$1899</p>

          {/* size */}
          <div className={classNames("flex flex-row space-x-2 py-3")}>
            <p className="text-lg">size</p>
            <select
              className="border-[1px] border-black/40 rounded-sm"
              name="size"
              id="size"
            >
              <option value="xs">extra small</option>
              <option value="sm">small</option>
              <option value="md" selected>
                medium
              </option>
              <option value="lg">large</option>
              <option value="xl">extra large</option>
            </select>
          </div>

          {/* materials and shipping */}
          <div className="md:py-7 py-2 text-black/80 text-sm text-center">
            <p>shipping: free</p>
            <p>materials: silk, metal, fur, leather</p>
          </div>
        </div>

        {/* button */}
        <button
          className={classNames(
            "bg-pink-900/80 text-white fixed left-0 bottom-0 w-full py-7",
            "md:relative md:px-12 md:py-2 md:w-fit md:h-fit md:rounded-sm md:border-[3px]"
          )}
        >
          purchase
        </button>
      </div>
    </div>
  );
}

export default Dress;