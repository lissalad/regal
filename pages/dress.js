import classNames from "classnames";
import DressImage from "../components/DressImage";

export default function dress() {
  return (
    <div className={classNames("flex flex-col", "md:flex-row")}>
      {/* column 1 / image */}
      <div>
        <DressImage
          title="Burgundy Evening"
          classes={classNames("w-[320px] m-6", "md:w-[600px]")}
        />
      </div>

      {/* column 2 */}
      <div
        className={classNames(
          "flex flex-col justify-between items-center w-full space-y-8",
          "md:w-fit md:py-12 md:h-fit"
        )}
      >
        {/* options and info */}
        <div
          className={classNames(
            "flex flex-col text-md items-center",
            "md:py-9"
          )}
        >
          {/* title and price */}
          <div className="flex flex-col items-center space-y-2 md:py-12">
            <h1 className="text-4xl">Burgundy Evening</h1>
            <p>$128.00</p>
          </div>
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
          <div className="md:py-7 py-1 text-black/80 text-sm text-center">
            <p>shipping: free</p>
            <p>materials: silk, metal, fur, leather</p>
          </div>
        </div>

        {/* purchase button */}
        <div className={classNames("", "md:border-4 md:border-pink-900/80")}>
          <button
            className={classNames(
              "bg-pink-900/80 text-white fixed left-0 bottom-0 w-full py-4",
              "md:relative md:w-fit md:px-8 md:rounded-sm md:m-1"
            )}
          >
            purchase
          </button>
        </div>
      </div>
    </div>
  );
}
